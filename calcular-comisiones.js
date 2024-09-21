function calcularComisiones() {
    const sueldo = parseFloat(document.getElementById('sueldo').value);
    const venta1 = parseFloat(document.getElementById('venta1').value);
    const venta2 = parseFloat(document.getElementById('venta2').value);
    const venta3 = parseFloat(document.getElementById('venta3').value);

    if (isNaN(sueldo) || isNaN(venta1) || isNaN(venta2) || isNaN(venta3) || sueldo<=0 || venta1<=0 || venta2<=0 || venta3<=0 ) {
        alert('Por favor, ingrese valores válidos.');
        return false;
    }

    const comision = (venta1 + venta2 + venta3) * 0.10;
    const totalMensual = sueldo + comision;

    document.getElementById('resultadoComisiones').innerHTML = 
    `Comisiones: $${comision.toFixed(2)}<br>Total Mensual: $${totalMensual.toFixed(2)}`;
    return false;
}
