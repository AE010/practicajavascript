function calcularEdad() {
    const fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
    const hoy = new Date();
    
    if (isNaN(fechaNacimiento.getTime())) {
        alert('Por favor, ingrese una fecha válida.');
        return false;
    }
    
    if (fechaNacimiento > hoy) {
        alert('La fecha de nacimiento no puede ser mayor al día de hoy.');
        return false;
    }

    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    document.getElementById('resultadoEdad').textContent = `Edad: ${edad} años`;
    return false;
}
