// ======================================
// ÍNDICE DE BÚSQUEDA (DATASET ESTÁTICO)
// ======================================

// Array que actúa como base de datos local en memoria.
// Cada objeto representa una página del sitio.
const searchIndex = [
    { 
        title: 'Inicio', 
        description: 'Página principal de Yamantau', 
        url: '../index.html', 
        keywords: 'inicio bienvenida' 
    },
    { 
        title: 'Servicios', 
        description: 'Listado de servicios de ciberseguridad', 
        url: 'servicios.html', 
        keywords: 'servicios ofertas' 
    },
    { 
        title: 'Proyecto Kosvinsky', 
        description: 'Red Team y pruebas de penetración', 
        url: 'kosvinsky.html', 
        keywords: 'red team pentesting' 
    },
    { 
        title: 'Búnker Mezhgorye', 
        description: 'Cloud privado y housing', 
        url: 'mezhgorye.html', 
        keywords: 'cloud privado housing' 
    },
    { 
        title: 'Protocolo Perimetr', 
        description: 'Respuesta automática ante incidentes', 
        url: 'perimetr.html', 
        keywords: 'incidentes respuesta automática' 
    },
    { 
        title: 'Contacto', 
        description: 'Formulario de contacto', 
        url: 'contacto.html', 
        keywords: 'contacto email' 
    },
    { 
        title: 'Proyectos Confidenciales', 
        description: 'Soluciones personalizadas Ufá-105', 
        url: 'contacto.html', 
        keywords: 'confidencial ufa beloretsk' 
    },
    { 
        title: 'Mapa del Sitio', 
        description: 'Mapa del sitio Yamantau', 
        url: 'sitemap.html', 
        keywords: 'mapa sitemap' 
    }
];


// ======================================
// FUNCIÓN PRINCIPAL DE BÚSQUEDA
// ======================================

function buscar() {

    // Se obtiene el valor del input de búsqueda
    // Se convierte a minúsculas para hacer la búsqueda case-insensitive
    // Se eliminan espacios al inicio y final
    const query = document.getElementById('searchInput')
                    .value
                    .toLowerCase()
                    .trim();

    // Se obtiene el contenedor donde se mostrarán los resultados
    const resultadosDiv = document.getElementById('resultados');

    // Se limpia el contenido previo antes de mostrar nuevos resultados
    resultadosDiv.innerHTML = '';

    // =========================
    // CASO: BÚSQUEDA VACÍA
    // =========================

    if (query === '') {
        // Si no hay texto, se muestra un mensaje informativo
        resultadosDiv.innerHTML = 
            '<p class="no-results">🔍 Comienza a escribir para buscar...</p>';
        return; // Se detiene la ejecución
    }

    // =========================
    // FILTRADO DEL ÍNDICE
    // =========================

    // Se recorre el array searchIndex y se filtran los elementos
    // cuya propiedad title, description o keywords contenga el texto buscado
    const resultados = searchIndex.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query) || 
        item.keywords.toLowerCase().includes(query)
    );

    // =========================
    // CASO: SIN RESULTADOS
    // =========================

    if (resultados.length === 0) {

        // Si el array filtrado está vacío, se muestra mensaje de error
        resultadosDiv.innerHTML = 
            '<p class="no-results">❌ No se encontraron resultados para "' 
            + query + 
            '"</p>';

    } else {

        // =========================
        // RENDERIZADO DE RESULTADOS
        // =========================

        // Por cada resultado encontrado se crea un bloque visual
        resultados.forEach(item => {

            // Se crea un nuevo elemento div dinámicamente
            const div = document.createElement('div');

            // Se asigna clase CSS para estilos
            div.className = 'result-item';

            // Se añade evento click para redirigir a la URL asociada
            div.onclick = () => window.location.href = item.url;

            // Se inserta contenido HTML con título y descripción
            div.innerHTML = `
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            `;

            // Se agrega el nuevo div al contenedor de resultados
            resultadosDiv.appendChild(div);
        });
    }
}


// ======================================
// INICIALIZACIÓN DEL SISTEMA
// ======================================

// Se espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {

    // Se obtiene el input de búsqueda
    const input = document.getElementById('searchInput');

    // Se verifica que exista en la página
    if (input) {

        // Se ejecuta la función buscar() cada vez que el usuario escribe
        // Evento "input" se dispara en cada pulsación
        input.addEventListener('input', buscar);
    }
});