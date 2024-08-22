const textarea = document.querySelector(".text-area"); 
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function bencriptador(){
    const textoencriptado = encriptar(textarea.value)
    mensaje.value = textoencriptado
    textarea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringencriptador){
    let codigo = [[ "e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringencriptador = stringencriptador.toLowerCase()

    for (let i = 0;i < codigo.length;i++){
        if(stringencriptador.includes(codigo[i][0])){
            stringencriptador = stringencriptador.replaceAll(codigo[i][0],codigo[i][1])
        }
    }
    return stringencriptador
}


function bdesencriptador(){
    const textoencriptado = desencriptar(textarea.value)
    mensaje.value = textoencriptado
    textarea.value = "";
    mensaje.style.backgroundImage = "none"
}

function desencriptar(stringdesencriptador){
    let codigo = [[ "e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringdesencriptador = stringdesencriptador.toLowerCase()

    for (let i = 0;i < codigo.length;i++){
        if(stringdesencriptador.includes(codigo[i][1])){
            stringdesencriptador = stringdesencriptador.replaceAll(codigo[i][1],codigo[i][0])
        }
    }
    return stringdesencriptador
}

function copiartext(){
    mensaje.select();
    document.execCommand("copy");
    alert("texto copiado en el potapapeles");
    
}