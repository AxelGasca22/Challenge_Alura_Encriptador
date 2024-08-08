

function encriptar() {
    let textareaEncriptar = document.getElementById("input-text-encriptar");
    let textoEncriptado = encriptarTexto(textareaEncriptar.value,1);
    insertarTexto(textoEncriptado);
    document.getElementById('input-text-encriptar').value = ''; // Limpiar el textarea de entrada
}

function encriptarTexto(texto,numero) {
    if(numero == 1){
        // Crear un objeto de mapeo para las vocales y sus reemplazos
        const reemplazos = {
            'a': 'ai',
            'e': 'enter',
            'i': 'imes',
            'o': 'ober',
            'u': 'ufat'
        };

        // Usar un array para construir la cadena encriptada
        let textoEncriptado = '';

        // Recorrer cada carácter de la cadena original
        for (let char of texto) {
            // Si el carácter es una vocal, usar el reemplazo correspondiente
            // Si no, usar el carácter original
            textoEncriptado += reemplazos[char] || char;
        }
        return textoEncriptado;
    }
    else if(numero == 2){
        const reemplazos = {
            'ai': 'a',
            'enter': 'e',
            'imes': 'i',
            'ober': 'o',
            'ufat': 'u'
        };
    
        let textoDesencriptado = texto;
    
        // Reemplazar las secuencias en orden inverso
        textoDesencriptado = textoDesencriptado.replace(/ai/g, 'a')
                                               .replace(/enter/g, 'e')
                                               .replace(/imes/g, 'i')
                                               .replace(/ober/g, 'o')
                                               .replace(/ufat/g, 'u');
    
        return textoDesencriptado;
    }
    else{
        console.log("No se ha seleccionado un numero valido");
    }
}

function desencriptar() {
    let textareaDesencriptar = document.getElementById("input-text-encriptar");
    let textoDesencriptado = encriptarTexto(textareaDesencriptar.value,2);
    console.log(textoDesencriptado); // Output: gaitober
    insertarTexto(textoDesencriptado);
    document.getElementById('input-text-encriptar').value = ''; // Limpiar el textarea de entrada
    
}

function insertarTexto(texto) {
    document.getElementById('output-text-encriptado').value = texto;
}

function validarEntrada(textarea) {
    // Expresión regular para permitir solo letras minúsculas sin acentos ni caracteres especiales
    const regex = /^[a-z\s]*$/;
    
    // Obtener el valor actual del textarea
    let valor = textarea.value;
    
    // Si el valor no coincide con la expresión regular, eliminar los caracteres no permitidos
    if (!regex.test(valor)) {
        textarea.value = valor.replace(/[^a-z\s]/g, '');
    }
}


function copiarAlPortapapeles() {
    console.log("Copiando al portapapeles...");
    // Obtener el texto del textarea de salida
    let textoEncriptado = document.getElementById('output-text-encriptado').value;
    
    // Crear un elemento temporal para copiar el texto
    let tempInput = document.createElement('textarea');
    tempInput.value = textoEncriptado;
    document.body.appendChild(tempInput);
    
    // Seleccionar el texto y copiarlo al portapapeles
    tempInput.select();
    document.execCommand('copy');
    
    // Eliminar el elemento temporal
    document.body.removeChild(tempInput);
    
    // Opcional: Mostrar una alerta o mensaje indicando que el texto fue copiado
    
}

function pegarDesdePortapapeles() {
    navigator.clipboard.readText()
        .then(texto => {
            document.getElementById('input-text-encriptar').value = texto;
        })
        .catch(err => {
            console.error('Error al leer del portapapeles: ', err);
        });
}




