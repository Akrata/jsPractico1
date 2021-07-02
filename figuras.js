//Codigo del Cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("el perimetro del cuadrado es : " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("el area del cuadrado es : " + areaCuadrado + " cm2");

console.groupEnd();
//Código del triangulo

console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triangulo miden: " 
+ ladoTriangulo1 + " cm,"
+ ladoTriangulo2 + " cm,"
+ baseTriangulo + " cm"
);

console.log("La altura del triangulo es de: " + alturaTriangulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("el perimetro del triangulo es : " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("el area del cuadrado es : " + areaTriangulo + " cm2");

console.groupEnd();

//Código del Circulo

console.group("Circulo");
const radioCirculo = 4;
console.log("el radio del circulo es : " + radioCirculo + " cm");
const diametroCirculo = radioCirculo * 2;
console.log("el diametro del circulo es : " + diametroCirculo + " cm");
const pi = Math.PI;
console.log("el valor de pi es : " + pi);

const perimetroCirculo = diametroCirculo * pi;
console.log("el perimetro del circulo es : " + perimetroCirculo + " cm");

const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log("el area del circulo es : " + areaCirculo + " cm2");

console.groupEnd();