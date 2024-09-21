function calcularDescuento() {
    const total = parseFloat(document.getElementById('total').value);
    const numdesc = 15;

    if (isNaN(total)|| total<= 0) {
        alert('Por favor, ingrese valores válidos.');
        return false;
    }

    const descuento = total * (numdesc / 100);
    const pagototal = total - descuento;

    
    document.getElementById('resultadoDescuento').innerHTML = 
    `Descuento aplicado: $${descuento.toFixed(2)}<br>Monto final a pagar: $${pagototal.toFixed(2)}`;
    return false;
}
