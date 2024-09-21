function calcularUtilidad() {

    const salarioMensual = parseFloat(document.getElementById('salario').value);
    const fechaIngreso = new Date(document.getElementById('fechaIngreso').value);
    
    if (isNaN(salarioMensual) || salarioMensual <= 0 || isNaN(fechaIngreso.getTime())) {
        alert('Por favor, ingrese valores válidos.');
        return false;
    }

    const hoy = new Date();

    if (fechaIngreso > hoy) {
        alert('Fecha no valida.');
        return false;
    }

    let antiguedad = hoy.getFullYear() - fechaIngreso.getFullYear();
    const mes = hoy.getMonth() - fechaIngreso.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaIngreso.getDate())) {
        antiguedad--;
    }

    let porcentajeUtilidad;
    if (antiguedad < 1) {
        porcentajeUtilidad = 0.05; 
    } else if (antiguedad >= 1 && antiguedad < 2) {
        porcentajeUtilidad = 0.07; 
    } else if (antiguedad >= 2 && antiguedad < 5) {
        porcentajeUtilidad = 0.10; 
    } else if (antiguedad >= 5 && antiguedad < 10) {
        porcentajeUtilidad = 0.15; 
    } else {
        porcentajeUtilidad = 0.20; 
    }

    const utilidadAnual = salarioMensual * porcentajeUtilidad 

    document.getElementById('resultadoUtilidad').textContent = 
        `La utilidad anual es: $${utilidadAnual.toFixed(2)}`;
    
    return false;
}
