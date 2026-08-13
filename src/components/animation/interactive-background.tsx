"use client";

import { useEffect, useRef } from "react";

export function InteractiveBackground() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = host.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const compact = window.matchMedia("(max-width: 760px)").matches;
    if (!container || reduced || compact || !window.WebGLRenderingContext) return;

    let disposed = false;
    let frame = 0;
    let visible = true;
    let pageVisible = !document.hidden;
    let cleanup = () => {};

    void import("three").then((THREE) => {
      if (disposed) return;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
      camera.position.z = 6.2;
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: "low-power" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.appendChild(renderer.domElement);

      const geometry = new THREE.IcosahedronGeometry(2.05, navigator.hardwareConcurrency > 6 ? 2 : 1);
      const wireframe = new THREE.WireframeGeometry(geometry);
      const lines = new THREE.LineSegments(wireframe, new THREE.LineBasicMaterial({ color: 0xf4f4f2, transparent: true, opacity: 0.15 }));
      scene.add(lines);

      const count = navigator.hardwareConcurrency > 6 ? 140 : 70;
      const positions = new Float32Array(count * 3);
      for (let index = 0; index < count; index += 1) {
        const radius = 2.15 + Math.random() * 1.25;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[index * 3 + 2] = radius * Math.cos(phi);
      }
      const pointGeometry = new THREE.BufferGeometry();
      pointGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const points = new THREE.Points(pointGeometry, new THREE.PointsMaterial({ color: 0xffffff, size: 0.025, transparent: true, opacity: 0.55 }));
      scene.add(points);

      const pointer = { x: 0, y: 0 };
      const onPointer = (event: PointerEvent) => {
        pointer.x = (event.clientX / window.innerWidth - 0.5) * 0.35;
        pointer.y = (event.clientY / window.innerHeight - 0.5) * 0.25;
      };
      const resize = () => {
        const { clientWidth, clientHeight } = container;
        renderer.setSize(clientWidth, clientHeight, false);
        camera.aspect = clientWidth / Math.max(clientHeight, 1);
        camera.updateProjectionMatrix();
      };
      const render = () => {
        if (disposed || !visible || !pageVisible) return;
        lines.rotation.y += 0.0015;
        points.rotation.y -= 0.0007;
        lines.rotation.x += (pointer.y - lines.rotation.x) * 0.025;
        lines.rotation.z += (-pointer.x - lines.rotation.z) * 0.025;
        points.rotation.x = lines.rotation.x * 0.7;
        renderer.render(scene, camera);
        frame = requestAnimationFrame(render);
      };
      const visibility = () => {
        pageVisible = !document.hidden;
        cancelAnimationFrame(frame);
        if (pageVisible && visible) render();
      };
      const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        cancelAnimationFrame(frame);
        if (visible && pageVisible) render();
      });
      observer.observe(container);
      window.addEventListener("pointermove", onPointer, { passive: true });
      window.addEventListener("resize", resize, { passive: true });
      document.addEventListener("visibilitychange", visibility);
      resize();
      render();

      cleanup = () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        window.removeEventListener("pointermove", onPointer);
        window.removeEventListener("resize", resize);
        document.removeEventListener("visibilitychange", visibility);
        geometry.dispose();
        wireframe.dispose();
        pointGeometry.dispose();
        (lines.material as InstanceType<typeof THREE.Material>).dispose();
        (points.material as InstanceType<typeof THREE.Material>).dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    });

    return () => { disposed = true; cleanup(); };
  }, []);

  return <div className="interactive-background" ref={host} aria-hidden="true" />;
}
