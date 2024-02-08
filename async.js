// Función para calcular el área de un cuadrado
function calcularAreaCuadrado(longitudLado) {
    return longitudLado * longitudLado;
}

// Función para calcular el perímetro de un rectángulo
function calcularPerimetroRectangulo(longitud, ancho) {
    return 2 * (longitud + ancho);
}

// Función para calcular el área de un triángulo
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Función para calcular la longitud de una circunferencia
function calcularLongitudCircunferencia(radio) {
    return 2 * Math.PI * radio;
}

// Función para calcular el área de un círculo
function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
}

// Mostrar resultados
function mostrarResultados() {
    console.log("Área de un cuadrado con longitud de lado 4:", calcularAreaCuadrado(4));
    console.log("Perímetro de un rectángulo con longitud 3 y ancho 5:", calcularPerimetroRectangulo(3, 5));
    console.log("Área de un triángulo con base 6 y altura 8:", calcularAreaTriangulo(6, 8));
    console.log("Longitud de una circunferencia con radio 10:", calcularLongitudCircunferencia(10));
    console.log("Área de un círculo con radio 7:", calcularAreaCirculo(7));
}

// Llamadas a las funciones para mostrar los resultados
mostrarResultados();