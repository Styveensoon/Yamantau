const searchIndex = [
    { title: 'Inicio', description: 'Página principal de Yamantau', url: '../index.html', keywords: 'inicio bienvenida' },
    { title: 'Servicios', description: 'Listado de servicios de ciberseguridad', url: 'servicios.html', keywords: 'servicios ofertas' },
    { title: 'Proyecto Kosvinsky', description: 'Red Team y pruebas de penetración', url: 'kosvinsky.html', keywords: 'red team pentesting' },
    { title: 'Búnker Mezhgorye', description: 'Cloud privado y housing', url: 'mezhgorye.html', keywords: 'cloud privado housing' },
    { title: 'Protocolo Perimetr', description: 'Respuesta automática ante incidentes', url: 'perimetr.html', keywords: 'incidentes respuesta automática' },
    { title: 'Contacto', description: 'Formulario de contacto', url: 'contacto.html', keywords: 'contacto email' },
    { title: 'Proyectos Confidenciales', description: 'Soluciones personalizadas Ufá-105', url: 'contacto.html', keywords: 'confidencial ufa beloretsk' },
    { title: 'Mapa del Sitio', description: 'Mapa del sitio Yamantau', url: 'sitemap.html', keywords: 'mapa sitemap' }
];

function buscar() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    if (query === '') {
        resultadosDiv.innerHTML = '<p class="no-results">🔍 Comienza a escribir para buscar...</p>';
        return;
    }

    const resultados = searchIndex.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query) || 
        item.keywords.toLowerCase().includes(query)
    );

    if (resultados.length === 0) {
        resultadosDiv.innerHTML = '<p class="no-results">❌ No se encontraron resultados para "' + query + '"</p>';
    } else {
        resultados.forEach(item => {
            const div = document.createElement('div');
            div.className = 'result-item';
            div.onclick = () => window.location.href = item.url;
            div.innerHTML = `<h4>${item.title}</h4><p>${item.description}</p>`;
            resultadosDiv.appendChild(div);
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('searchInput');
    if (input) {
        input.addEventListener('input', buscar);
    }
});

// COMMENT
