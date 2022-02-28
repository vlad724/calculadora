var operandoa;
var operandob;
var operacion;

function init() {
    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    //eventos

    uno.addEventListener("click", function() {
        resultado.textContent = resultado.textContent + "1";
    })
    dos.addEventListener("click", function() {
        resultado.textContent = resultado.textContent + "2";
    })
    tres.addEventListener("click", function() {
        resultado.textContent = resultado.textContent + "3";
    })
    cuatro.addEventListener("click", function() {
        resultado.textContent = resultado.textContent + "4";
    })
    cinco.addEventListener("click", function() {
        resultado.textContent = resultado.textContent + "5";
    })
    seis.addEventListener("click", function() {
        resultado.textContent = resultado.textContent + "6";
    })
    siete.addEventListener("click", function() {
        resultado.textContent = resultado.textContent + "7";
    })
    ocho.addEventListener("click", function() {
        resultado.textContent = resultado.textContent + "8";
    })
    nueve.addEventListener("click", function() {
        resultado.textContent = resultado.textContent + "9";
    })
    cero.addEventListener("click", function() {
        resultado.textContent = resultado.textContent + "0";
    })

    reset.addEventListener("click", function() {
        resetear();
    })

    suma.addEventListener("click", function() {
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    })

    resta.addEventListener("click", function() {
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    })

    multiplicacion.addEventListener("click", function() {
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    })

    division.addEventListener("click", function() {
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    })

    igual.addEventListener("click", function() {
        operandob = resultado.textContent;
        resolver();
    })


}

function limpiar() {
    resultado.textContent = "";
}

function resetear() {
    resultado.textContent = "";
    operandob = 0;
    operandoa = 0;
    operacion = "";
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    resultado.textContent = res;
}