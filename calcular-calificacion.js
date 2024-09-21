function calcularCalificacion() {
    const parcial1 = parseFloat(document.getElementById('parcial1').value);
    const parcial2 = parseFloat(document.getElementById('parcial2').value);
    const parcial3 = parseFloat(document.getElementById('parcial3').value);
    const examenFinal = parseFloat(document.getElementById('examenFinal').value);
    const trabajoFinal = parseFloat(document.getElementById('trabajoFinal').value);

    if (parcial1<0 || parcial1>10 || parcial2<0 || parcial2>10 || parcial3<0 || parcial3>10 || examenFinal<0 || examenFinal>10 || trabajoFinal<0 || trabajoFinal>10) {
        alert('Por favor, ingrese valores válidos.');
        return false;
    }

    const promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
    const calificacionFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);

    document.getElementById('resultadoCalificacion').textContent = `Calificación Final: ${calificacionFinal.toFixed(2)}`;
    return false;
}
