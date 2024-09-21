function calcularHorasExtras() {
    const horasExtras = parseFloat(document.getElementById('horasExtras').value);
    const tarifaHora = parseFloat(document.getElementById('tarifaHora').value);

    if (isNaN(horasExtras) || isNaN(tarifaHora) || horasExtras <= 0 || tarifaHora <= 0) {
        alert('Por favor, ingrese valores válidos.');
        return false;
    }

    let totalextras = 0;

    // Si las horas extras no exceden de 8, se pagan al doble.
    if (horasExtras <= 8) {
        totalextras = horasExtras * tarifaHora * 2; // Pago al doble.
    } else {
        // Las primeras 8 horas se pagan al doble.
        totalextras = 8 * tarifaHora * 2;
        // Las horas que exceden de 8 se pagan al triple.
        totalextras += (horasExtras - 8) * tarifaHora * 3;
    }

    // Mostrar el resultado en la página.
    document.getElementById('resultadoHorasExtras').textContent = 
        `Total a recibir por horas extras: $${totalextras.toFixed(2)}`;

    return false;
}
