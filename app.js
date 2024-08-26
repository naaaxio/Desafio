function encriptar() {
    // Obtén el texto ingresado por el usuario
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo_mensaje");
    let parrafo = document.getElementById("parrafo");

    // Verifica si el texto contiene caracteres válidos
    if (!verificarCaracteresValidos(texto)) {
        tituloMensaje.textContent = "El texto contiene caracteres no permitidos o mayúsculas.";
        parrafo.textContent = "";
        return;
    }

    // Verifica si el texto contiene al menos una vocal antes de cifrar
    if (verificarVocales(texto)) {
        // Si el texto contiene vocales, procede con el cifrado
        let textoCifrado = texto
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/o/gi, "ober")
            .replace(/a/gi, "ai")
            .replace(/u/gi, "ufat");
        tituloMensaje.textContent = "Texto cifrado con éxito";
        parrafo.textContent = textoCifrado;
    } else {
        // Si no hay vocales, muestra el mensaje de error
        tituloMensaje.textContent = "Por favor, ingresa un texto con vocales para cifrar";
        parrafo.textContent = "";
    }
}

// Función para verificar si el texto contiene vocales
function verificarVocales(texto) {
    return /[aeiou]/i.test(texto);
}

// Función para verificar si el texto contiene caracteres válidos
function verificarCaracteresValidos(texto) {
    return /^[a-z\s]*$/.test(texto); // Solo letras minúsculas y espacios
}

function desencriptar() {
    // Obtén el texto cifrado ingresado por el usuario
    let textoCifrado = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo_mensaje");
    let parrafo = document.getElementById("parrafo");

    // Verifica si el texto contiene caracteres válidos
    if (!verificarCaracteresValidos(textoCifrado)) {
        tituloMensaje.textContent = "El texto contiene caracteres no permitidos o mayúsculas.";
        parrafo.textContent = "";
        return;
    }

    if (textoCifrado.length !== 0) {
        let textoDesencriptado = textoCifrado
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ober/gi, "o")
            .replace(/ai/gi, "a")
            .replace(/ufat/gi, "u");
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = textoDesencriptado;
    } else {
        tituloMensaje.textContent = "Por favor, ingresa un texto cifrado para desencriptar";
        parrafo.textContent = "";
    }
}

function limpiar() {
    document.getElementById("texto").value = ""; // Limpia el área de texto
    document.getElementById("titulo_mensaje").textContent = "Ningún mensaje fue encontrado";
    document.getElementById("parrafo").textContent = "Ingresa el texto que deseas encriptar o desencriptar";
}
