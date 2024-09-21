function convertirPalabras() {
    const palabras = document.getElementById('palabras').value.split(/\s+/);
    const traduccion = {
        'cero': 0,
        'uno': 1,
        'dos': 2,
        'tres': 3,
        'cuatro': 4,
        'cinco': 5,
        'seis': 6,
        'siete': 7,
        'ocho': 8,
        'nueve': 9
    };

    const resultado = palabras.map(palabra => traduccion[palabra.toLowerCase()] !== undefined ? traduccion[palabra.toLowerCase()] : -1);
    document.getElementById('resultadoPalabras').textContent = `Traducción: ${resultado.join(', ')}`;
    return false;
}
