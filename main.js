// Función para crear las tarjetas de libros
function crearTarjetasLibros() {
    const contenedor = document.getElementById('biblioteca');
    
    libros.forEach(libro => {
        const divLibro = document.createElement('div');
        divLibro.className = 'libro';
        divLibro.innerHTML = `
            <div class="libro-interior" onclick="abrirModal(${libro.id})">
                <div class="libro-frente">
                    <img src="${libro.imagen}" alt="${libro.titulo}">
                </div>
                <div class="libro-dorso">
                    <h3>${libro.titulo}</h3>
                    <p>${libro.descripcionCorta}</p>
                    <p>Por: ${libro.autor}</p>
                </div>
            </div>
        `;
        contenedor.appendChild(divLibro);
    });
}

// Función para abrir el modal
function abrirModal(id) {
    const libro = libros.find(l => l.id === id);
    const modal = document.getElementById('modal');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalResumen = document.getElementById('modal-resumen');
    const modalDescarga = document.getElementById('modal-descarga');

    modalTitulo.textContent = libro.titulo;
    modalResumen.textContent = libro.resumenLargo;
    modalDescarga.onclick = () => window.location.href = libro.enlaceDescarga;

    modal.style.display = 'block';
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Inicializar la biblioteca cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    crearTarjetasLibros();
});



// Filtrar libros por categoría
function filtrarPorCategoria(categoria) {
    const librosFiltrados = libros.filter(libro => libro.categoria === categoria);
    mostrarLibros(librosFiltrados);
}

// Mostrar los libros filtrados
function mostrarLibros(libros) {
    const contenedorLibros = document.getElementById('libros-container');
    contenedorLibros.innerHTML = "";  // Limpiar contenedor antes de mostrar nuevos libros

    libros.forEach(libro => {
        const libroHTML = `
            <div class="libro">
                <img src="${libro.imagen}" alt="${libro.titulo}">
                <h3>${libro.titulo}</h3>
                <p>${libro.descripcionCorta}</p>
                <a href="${libro.enlaceDescarga}" class="boton-descargar">Descargar</a>
            </div>
        `;
        contenedorLibros.innerHTML += libroHTML;
    });
}

// Mostrar todos los libros al cargar la página
window.onload = () => mostrarLibros(libros);
