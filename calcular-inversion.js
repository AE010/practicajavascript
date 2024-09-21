function calcularInversion() {
    const capital = parseFloat(document.getElementById('capital').value);
    const tasa = 0.02; 
    if (isNaN(capital) || capital <= 0) {
        alert('Por favor, ingrese un valor válido.');
        return false;
    }
    const ganancia = capital * tasa;
    document.getElementById('resultado').textContent = `Ganancia después de un mes: $${ganancia.toFixed(2)}`;
    return false; 
}
