const texarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(texarea.value)
    if(texarea.value === "  "){
        mostrarMensaje("Por favor, ingresa un texto antes de encriptar.")
    }else{
    mensaje.value =  textoEncriptado;
    texarea.value = "";
    mensaje.style.backgroundImage = "none";
    }
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(texarea.value)
    if(texarea.value === "   "){
        mostrarMensaje("Por favor, ingresa un texto antes de desencriptar.")
    }else{
    mensaje.value = textoEncriptado;
    texarea.value = "";
    }
}
function mostrarMensaje(mensaje) {
    const mensajeHtml = `<p class="mensaje-mensaje">${mensaje}</p>`;
    resultado.insertAdjacentHTML("beforebegin", mensajeHtml);
}

function encriptar(stringEncriptado){
    let matrizCodigo = [ ["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return stringEncriptado
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [ ["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])

        }
    }
    return stringDesencriptado
}

function copiarTexto() {
    mensaje.select();
    document.execCommand("copy");
    //alert("Texto copiado al portapapeles");
}

  