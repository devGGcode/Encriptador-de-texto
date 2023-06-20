let textarea;
let mostrar_ocultarvar = true;
let sec_result;
let opcion = "";
let textencrip ="";
let textdesencrip = "";
let mensaje;
let textoa;
let caracteresok = /[a-z\s]+/;

document.addEventListener("DOMContentLoaded", function() {
    textarea = document.getElementById("ingreso");
    textarea.focus();
});

function enfocar(){
    textarea = document.getElementById("ingreso");
    textarea.focus();
}

function mostrar_ocultar(){
    if(mostrar_ocultarvar){
        mostrar_ocultarvar = false;
        document.getElementById("Botoncopiar").style.display = "block";
        document.getElementById("imagenresul").style.display = "none";
        document.getElementById("adver1").style.display = "none";
        document.getElementById("adver2").style.display = "none";
        var caja = document.getElementById("resultid");
    }
}

function encriptar(texto, sec_result){
    mostrar_ocultar();
    textencrip ="";
    for(var i = 0; i < texto.length; i++){
        switch(texto[i]){
            case "a":
                textencrip = textencrip + "ai";
                break;
            case "e":
                textencrip = textencrip + "enter";
                break;
            case "i":
                textencrip = textencrip + "imes";
                break;
            case "o":
                textencrip = textencrip + "ober";
                break;
            case "u":
                textencrip = textencrip + "ufat";
                break;
            default:
                textencrip = textencrip + texto[i];
                break;
        }
    }
    sec_result.textContent = textencrip;
    opcion = "encriptado"
    mostrar_ocultar();
}

function boton_encrip(){
    texto = document.getElementById("ingreso").value;
    sec_result = document.getElementById("textresul");
    mensaje = true;
    
        if (texto != ""){
            for (var x = 0; x < texto.length; x++){
                if (caracteresok.test(texto[x]) == false){
                    mensaje = false; 
                    break;
                }
            }
            if(mensaje){
                encriptar(texto,sec_result);
            }else{
                alert("Por favor, ingresa únicamente palabras con letras minúsculas y sin acentos");
            }

        }else if(textencrip != sec_result.textContent && (textencrip != "" || textdesencrip != "")){
        texto = sec_result.textContent;
        encriptar(texto,sec_result);

    }
    enfocar();
    
}

function desencriptar(texto,sec_result){
    mostrar_ocultar();
    textdesencrip = "";
    for(var i = 0; i < texto.length; i++){
        textoa = "";
        for(var j = 0; j < 5; j++){
            textoa = textoa + texto[i+j];
            if(textoa == "ai"){
                textdesencrip = textdesencrip + "a";
                i = i + 1;
                break;
            }else if(textoa == "enter"){
                textdesencrip = textdesencrip + "e";
                i = i + 4;
                break;
            }else if(textoa == "imes"){
                textdesencrip = textdesencrip + "i";
                i = i + 3;
                break;
            }else if(textoa == "ober"){
                textdesencrip = textdesencrip + "o";
                i = i + 3;
                break;
            }else if(textoa == "ufat"){
                textdesencrip = textdesencrip + "u";
                i = i + 3;
                break;
            }else if(j == 4){
                textdesencrip = textdesencrip + texto[i];
                break;
            }
        }
    }
    sec_result.textContent = textdesencrip;
    opcion = "desencriptado";
}

function boton_desencrip(){
    texto = document.getElementById("ingreso").value;
    sec_result = document.getElementById("textresul");
    mensaje = true;

    if (texto != ""){
        for (var x = 0; x < texto.length; x++){
            if (caracteresok.test(texto[x]) == false){
                mensaje = false; 
                break;
            }
        }
        if(mensaje){
            desencriptar(texto,sec_result);
        }else{
            alert("Por favor, ingresa únicamente palabras con letras minúsculas y sin acentos");
        }

    }else if(textdesencrip != sec_result.textContent && (textencrip != "" || textdesencrip != "")){
        texto = sec_result.textContent;
        desencriptar(texto,sec_result);
    }

    enfocar();

}

function boton_copi(){
    navigator.clipboard.writeText(sec_result.textContent).then(() => {
        alert("El texto " + opcion + " fue copiado con éxito")
        enfocar();
    }, () => {
        /* clipboard write failed */
    });
}