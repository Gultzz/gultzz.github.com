window.onload = hora(), tchu(), piscar();
// window.onscroll =()=>{
//     console.log("movendo scroll");
// };

function hora(){
    var data = new Date();
    var h = data.getHours();
    var m = data.getMinutes();
    var s = data.getSeconds();
    if(h < 10){
        h = "0" + h;
    }
    if(m < 10){
        m = "0" + m;
    }
    if(s < 10){
        s = "0" + s;
    }
    setTimeout(function(){
        var horas = document.querySelector(".header2-1");
        var lua = document.getElementById("lua");
        if(h >= 18 && h <= 23){
            lua.src = "src/moon-fill.svg";
        }else if(h >= 0 && h <= 6){
            lua.src = "src/moon-fill.svg";
        }else{
            lua.src = "src/sun-fill.svg";
        }
        horas.innerHTML = `${h}:${m}:${s}`;
        hora();
    },100);
}
function tchu(){
    setTimeout(function(){
        var flexa = document.getElementById("flexa");
        if(flexa.style.bottom == "10px" || flexa.style.bottom == 10){
            flexa.style.transition = "0.3s";
            flexa.style.bottom = "20px";
        }else{
            flexa.style.transition = "0.3s";
            flexa.style.bottom = "10px";
        }
        tchu();
    },300);
}

function piscar(){
    setTimeout(function(){
        var span = document.getElementById("span");
        if(span.style.visibility == "hidden"){
            span.style.transition = "0.1";
            span.style.visibility = "visible";
        }else{
            span.style.transition = "0.1";
            span.style.visibility = "hidden";
        }
        piscar();
    },700);
}

function fechar(){
    var nada = document.getElementById("nada");
    nada.style.display = "none";
}
function abrir(){
    var nada = document.getElementById("nada");
    nada.style.display = "flex";
}
function fechar2() {
    var teste = document.getElementById("teste");
    var teste2 = document.getElementById("teste2");
    teste2.style.transition = "1s";
    teste.style.display = "none";
    teste2.style.width = "0vh";
}
function abrir2() {
    var teste = document.getElementById("teste");
    var teste2 = document.getElementById("teste2");
    teste2.style.transition = "1s"; 
    teste.style.display = "block";
    teste2.style.display = "block";
    teste2.style.width = "60vh";
}
// function criar(){
//     var pages = document.getElementById("pages");
//     var flex = document.getElementById("flexa");
//     if(pages.style.display == "none"){
//         pages.style.transition= "1s";
//         pages.style.display = "block";
//         flex.style.display = "flex";
//     }else{
//         pages.style.transition= "1s";
//         pages.style.display = "none";
//         flex.style.display = "none";
//     }
// }

//  (function(){
//      var names2 = document.getElementById("textinho");
//      names2.innerHTML = "Oi cara";
//  }())

// let sla = 2;
// sla = ()=>{
//     return sla
// }
// console.log(sla())


// let texto = document.getElementById("textt");

// function typeWriter(elemento, type) {
//     const textoArray = elemento.innerText.split('');
//     elemento.innerText = '';
//     textoArray.forEach((letra, i) => {
//       setTimeout(() => elemento.innerText += letra, 75 * i);
//     });
// }
// function repeat() {
//     setTimeout(function () {
//         typeWriter(texto);
//         repeat();
//     },5000);
// }
function suma() {
    var flexa = document.getElementById("flexa");
    flexa.style.visibility = "hidden";
}

// function mecher() {
//     setTimeout(function(){
//         var left = document.getElementById("left");
//         if(left.style.marginLeft == "5vh"){
//             left.style.transition = "0.5s";
//             left.style.marginLeft = "1vh";
//         }else{
//             left.style.transition = "0.5s";
//             left.style.marginLeft = "5vh";
//         }
//         mecher();
//     },500);
// }

// function palavraNova(palavra, chave) {
//     var alf = "abcdefghijklmnopqrstuvwxyz";
//     //for (i = 0; i < alf.length; i++){
//         // console.log(alf[i]);
//     var letrasP = [];
//     var letrasA = [];
//     for (n = 0; n < palavra.length; n++){
//             // console.log("--" + palavra[n] + "--");
//             letrasP[n] = palavra[n];
//             // console.log("--" + palavra[i] + "--");
//             // console.log("--" + alf[n] + "--");
//             // console.log("--" + alf[i] + "--");
//     }
//     for (i = 0; i < alf.length; i++){
//         letrasP.forEach(item => {
//             if (item == alf[i]) {
//                 letrasA[n] = item;
//             }
//         });
//     }
//     console.log(letrasP + letrasA);
//     //}
// }
// palavraNova('palavra');

function contaLetras(string, letra) {
    // Escreva aqui seu código
    var letras = "";
    for (n = 0; n < string.length; n++) {
        if (string[n] == letra) {
            letras += string[n];
        }
    }
    console.log(letras.length);
}
console.log(contaLetras("addnogrupoooo", 'o'));


function trocaVogais(string) {
    var valor = '';
    for (i = 0; i < string.length; i++){
        if (string[i] === 'a' || string[i] === 'A' ||
            string[i] === 'e' || string[i] === 'E' ||
            string[i] === 'i' || string[i] === 'I' ||
            string[i] === 'o' || string[i] === 'O' ||
            string[i] === 'u' || string[i] === 'U') {
            valor += '1';
        } else {
            valor += string[i];
        }
    }
    console.log(valor);
}
trocaVogais('testediario');


function tiraNumeros(string) {
  // Escreva aqui seu código
  var valor = '';
  var i = 0;
  while(i < string.length){
    if (string[i] === '1' || string[i] === '2' ||
        string[i] === '3' || string[i] === '4' ||
        string[i] === '5' || string[i] === '6' ||
        string[i] === '7' || string[i] === '8' ||
        string[i] === '9' || string[i] === '0'){
          valor += '';
    }else{
      valor += string[i];
    }
    i++;
  }
  return valor;
}
console.log(tiraNumeros('t13313e123ste'));


//! function somaAteMeta(inicio, meta) {
//!   // Escreva aqui seu código
//!     var array = [];// 3
//!     var valorF = 0;
//!     for (i = 0; i <= meta; i++){
//!         inicio++;
//!         if (valorF != meta) {
//!             array[i] = inicio;
//!         } else{
//!             break;
//!         }
//!         valorF = valorF + inicio;
//!     }
//!     return (array, valorF);
//! }

//! console.log(somaAteMeta(2, 15));


function subArray(array, subarray) {
  // Escreva aqui seu código
    var num = 0;
    for (n = 0; n < array.length; n++){
        for (i = 0; i < subarray.length; i++){
            if (subarray[i] == array[n]) {
                num++;
            }
        }
    }
    if (num == subarray.length) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}
subArray(["1", "2", "3", "4", "5"], ["1", "3", "5"]);
