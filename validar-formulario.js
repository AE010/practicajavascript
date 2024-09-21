function validarNombre() {
    const nombre = document.getElementById('nombre').value;
    if (!nombre.trim()) {
        alert('El campo es obligatorio.');
        return false;
    }
    return true;
}

function validarEmail() {
    const email = document.getElementById('email').value;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert('Por favor, ingrese una dirección de email válida.');
        return false;
    }
    return true;
}

function validarComentarios() {
    const comentarios = document.getElementById('comentarios').value;
    if (comentarios.length > 50) {
        alert('El texto no debe pasar los 50 caracteres.');
        return false;
    }
    return true;
}

function validarPassword() {
    const password = document.getElementById('password').value;
    const checarcontra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!checarcontra.test(password)) {
        alert('La contraseña debe tener al menos 6 caracteres, una letra mayúscula, una letra minúscula y un dígito.');
        return false;
    }
    return true;
}

function validarFormulario() {
    const nombreValido = validarNombre();
    const emailValido = validarEmail();
    const comentariosValido = validarComentarios();
    const passwordValido = validarPassword();
    const aceptarCondiciones = document.getElementById('aceptar').checked;
    
    if (!nombreValido || !emailValido || !comentariosValido || !passwordValido || !aceptarCondiciones) {
        if (!aceptarCondiciones) {
            alert('Debe aceptar las condiciones del servicio.');
        }
        return false; 
    }
    
    return true;
}
