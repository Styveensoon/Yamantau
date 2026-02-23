// Se añade un listener al formulario con id "contactForm"
// El evento se dispara cuando el usuario intenta enviarlo (submit)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    
    // Se previene el comportamiento por defecto del formulario
    // (evita que la página se recargue o que se envíen los datos al servidor)
    e.preventDefault();

    // Variable bandera que determinará si el formulario es válido
    // Si alguna validación falla, se cambiará a false
    let isValid = true;

    // Limpieza previa de mensajes de error visibles
    // Se ocultan todos los elementos con clase "error-message"
    document.querySelectorAll('.error-message')
            .forEach(el => el.style.display = 'none');

    // Se eliminan estilos de error previamente aplicados
    // (por ejemplo bordes rojos en inputs)
    document.querySelectorAll('input, textarea')
            .forEach(el => el.classList.remove('error'));

    // =========================
    // VALIDACIÓN DEL NOMBRE
    // =========================

    const nombre = document.getElementById('nombre');

    // Se verifica que no esté vacío (ignorando espacios)
    if (nombre.value.trim() === '') {
        mostrarError('errorNombre', 'El nombre es obligatorio');
        nombre.classList.add('error'); // Aplica estilo visual de error
        isValid = false;
    }

    // =========================
    // VALIDACIÓN DEL EMAIL
    // =========================

    const email = document.getElementById('email');

    // Expresión regular básica para validar formato de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === '') {
        // Campo obligatorio
        mostrarError('errorEmail', 'El correo es obligatorio');
        email.classList.add('error');
        isValid = false;

    } else if (!emailRegex.test(email.value.trim())) {
        // Formato inválido
        mostrarError('errorEmail', 'Ingresa un correo válido');
        email.classList.add('error');
        isValid = false;
    }

    // =========================
    // VALIDACIÓN DEL TELÉFONO
    // =========================

    const telefono = document.getElementById('telefono');

    // Solo se valida si el campo no está vacío (es opcional)
    if (telefono.value.trim() !== '') {

        // Solo permite números
        const phoneRegex = /^[0-9]+$/;

        if (!phoneRegex.test(telefono.value.trim())) {
            mostrarError('errorTelefono', 'Solo se permiten números');
            telefono.classList.add('error');
            isValid = false;
        }
    }

    // =========================
    // VALIDACIÓN DEL MENSAJE
    // =========================

    const mensaje = document.getElementById('mensaje');

    if (mensaje.value.trim() === '') {
        // Campo obligatorio
        mostrarError('errorMensaje', 'El mensaje es obligatorio');
        mensaje.classList.add('error');
        isValid = false;

    } else if (mensaje.value.trim().length < 10) {
        // Longitud mínima requerida
        mostrarError('errorMensaje', 
                     'El mensaje debe tener al menos 10 caracteres');
        mensaje.classList.add('error');
        isValid = false;
    }

    // =========================
    // RESULTADO FINAL
    // =========================

    // Si ninguna validación falló, se considera válido
    if (isValid) {

        // Simulación de envío exitoso
        alert('Formulario enviado correctamente (simulación)');

        // Opcional: resetear el formulario
        // this.reset();
    }
});


// ======================================
// FUNCIÓN AUXILIAR PARA MOSTRAR ERRORES
// ======================================

function mostrarError(id, mensaje) {

    // Obtiene el contenedor del mensaje de error asociado al campo
    const errorDiv = document.getElementById(id);

    // Inserta el texto del error (uso de textContent evita inyección HTML)
    errorDiv.textContent = mensaje;

    // Hace visible el mensaje
    errorDiv.style.display = 'block';
}