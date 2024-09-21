function eliminarEtiquetas() {
    let html = document.getElementById('html').value;

    // Expresión regular para eliminar etiquetas <script> y su contenido
    const regex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
    html = html.replace(regex, '');

    document.getElementById('resultadoEtiquetas').textContent = `HTML limpio: \n${html}`;
    return false;
}
