var Calculadora = (function () {


// Variables Globales
var SignoActual = "Igual";
var estado = 1;
var botones = document.getElementsByClassName("tecla");
var OperacionesEnCadena = 1;


// Funci�n Para Validar La Pantalla, En La Que S�lo Se Muestran 8 D�gitos
function MiFuncionValidacionOchoDigitos() {
var Validacion = pantalla.textContent;
var ValidacionOchoDigitos = Validacion.substring(0, 8)
pantalla.textContent = ValidacionOchoDigitos;
};


// Ciclo For Que Hacer Que La Tecla Presionada Reduzca Su Tama�o Y Vuelva A Su Forma Original Al Soltarla
for (let i = 0; i < botones.length; i++) {
botones[i].addEventListener("mousedown", function () {
botones[i].style.transform = "scale(.95, .95)";
});
botones[i].addEventListener("mouseup", function () {
botones[i].setAttribute("style", "transform:scale(1, 1)");
});
};


// Ciclo For Que Env�a Los Numero Como Par�metros 
for (let i = 0; i < 10; i++) {
document.getElementById(i + "").addEventListener("click", function () {
escribir(i);
});
};


// Funci�n Tecla Del Punto
document.getElementById("punto").addEventListener("click", function () {
escribir(".")
});


// Funci�n Que Borra Los N�meros Que Est�n En Pantalla Y Se Muestre S�lo El N�mero Cero
document.getElementById("on").addEventListener("click", function () {
SignoActual = "Igual";
estado = 1;
OperacionesEnCadena = 1
document.getElementById("display").innerHTML = 0;
});


// Funci�n Tecla +/-
document.getElementById("sign").addEventListener("click", function () {
if (pantalla.textContent == "0") {
} else {
var sign = parseFloat(pantalla.textContent) * -1;
pantalla.textContent = sign;
};
});


// Funci�n Que Recibe Los Numero Como Par�metros
function escribir(numero) {
pantalla = document.getElementById("display");
if (estado == 1) {
pantalla.textContent = "";
estado = 2;
}
if (pantalla.textContent.indexOf(".") == -1) {
pantalla.textContent = pantalla.textContent + numero;
if (pantalla.textContent == "00") {
pantalla.textContent = 0;
}
} else {
      if (numero == ".") {
      numero = "";
      }
      pantalla.textContent = pantalla.textContent + numero;
};
if (pantalla.textContent == ".") {
pantalla.textContent = 0;
estado = 1;
};
MiFuncionValidacionOchoDigitos()
};


// Funci�n Suma
document.getElementById("mas").addEventListener("click", function () {
if (OperacionesEnCadena == 1) {
SecuenciaDeOperaciones = 1;
Total(SignoActual);
SignoActual = "suma";
} else {
SecuenciaDeOperaciones = 1;
SignoActual = "Igual";
Total(SignoActual);
SignoActual = "suma";
OperacionesEnCadena = 1;
};
});


// Funci�n Resta
document.getElementById("menos").addEventListener("click", function () {
if (OperacionesEnCadena == 1) {
SecuenciaDeOperaciones = 1;
Total(SignoActual);
SignoActual = "resta";
} else {
SecuenciaDeOperaciones = 1;
SignoActual = "Igual";
Total(SignoActual);
SignoActual = "resta";
OperacionesEnCadena = 1;
};
});


// Funci�n Multiplicaci�n
document.getElementById("por").addEventListener("click", function () {
if (OperacionesEnCadena == 1) {
SecuenciaDeOperaciones = 1;
Total(SignoActual);
SignoActual = "multiplicacion";
} else {
SecuenciaDeOperaciones = 1;
SignoActual = "Igual";
Total(SignoActual);
SignoActual = "multiplicacion";
OperacionesEnCadena = 1;
};
});


// Funci�n Divisi�n
document.getElementById("dividido").addEventListener("click", function () {
if (OperacionesEnCadena == 1) {
SecuenciaDeOperaciones = 1;
Total(SignoActual);
SignoActual = "division";
} else {
SecuenciaDeOperaciones = 1;
SignoActual = "Igual";
Total(SignoActual);
SignoActual = "division";
}
});


// Funci�n Igual
document.getElementById("igual").addEventListener("click", function () {
Total(SignoActual)
SecuenciaDeOperaciones = 2;
pantalla.textContent = parseFloat(operador1);
MiFuncionValidacionOchoDigitos()
OperacionesEnCadena = 2;
});


// Funci�n Y Sentencia Switch Para Hacer Las Respectivas Operaci�n Aritm�ticas
function Total(signo) {
if (SecuenciaDeOperaciones == 1) {
operador2 = pantalla.textContent;
}
switch (signo) {
case "suma":
operador1 = parseFloat(operador1) + parseFloat(operador2);
pantalla.textContent = "";
break;
case "resta":
operador1 = parseFloat(operador1) - parseFloat(operador2);
pantalla.textContent = "";
break;
case "multiplicacion":
operador1 = parseFloat(operador1) * parseFloat(operador2);
pantalla.textContent = "";
break;
case "division":
operador1 = parseFloat(operador1) / parseFloat(operador2);
pantalla.textContent = "";
break;
case "Igual":
operador1 = pantalla.textContent;
pantalla.textContent = "";
};
};


// FIN :)
}());


