import type { CSSProperties } from "react";

type CharacterStyle = CSSProperties & { "--character-index": number };

export function WavyText({ text, className = "" }: { text: string; className?: string }) {
  let characterIndex = 0;

  return (
    <span className={`wavy-text ${className}`.trim()} data-text={text} aria-hidden="true">
      {text.split(" ").map((word, wordIndex, words) => (
        <span className="wavy-word" data-word={word} key={`${word}-${wordIndex}`}>
          {Array.from(word).map((character) => {
            const index = characterIndex++;
            return <span className="wavy-character" style={{ "--character-index": index } as CharacterStyle} key={`${character}-${index}`}>{character}</span>;
          })}
          {wordIndex < words.length - 1 && <span className="wavy-space">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
