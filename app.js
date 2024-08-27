console.log("ejecutando el sistema")

// Obtener elementos del DOM
const textAreaInput = document.querySelector('.text-area');
const textAreaOutput = document.querySelector('.mensaje');
const btnEncriptar = document.querySelector('.btn-encriptador');
const btnDesencriptar = document.querySelector('.btn-desencriptador');
const btnCopiar = document.querySelector('.copiar');

// Función para encriptar texto
function encriptarTexto(texto) {
    let encriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encriptado;
}

// Función para desencriptar texto
function desencriptarTexto(texto) {
    let desencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return desencriptado;
}


// Añadir eventos a los botones
btnEncriptar.addEventListener('click', () => {
    const textoEncriptado = encriptarTexto(textAreaInput.value);
    textAreaOutput.value = textoEncriptado;
});

btnDesencriptar.addEventListener('click', () => {
    const textoDesencriptado = desencriptarTexto(textAreaInput.value);
    textAreaOutput.value = textoDesencriptado;
});

btnCopiar.addEventListener('click', () => {
    textAreaOutput.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});
