document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = true;

    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
    document.querySelectorAll('input, textarea').forEach(el => el.classList.remove('error'));

    const nombre = document.getElementById('nombre');
    if (nombre.value.trim() === '') {
        mostrarError('errorNombre', 'El nombre es obligatorio');
        nombre.classList.add('error');
        isValid = false;
    }

    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        mostrarError('errorEmail', 'El correo es obligatorio');
        email.classList.add('error');
        isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
        mostrarError('errorEmail', 'Ingresa un correo válido');
        email.classList.add('error');
        isValid = false;
    }

    const telefono = document.getElementById('telefono');
    if (telefono.value.trim() !== '') {
        const phoneRegex = /^[0-9]+$/;
        if (!phoneRegex.test(telefono.value.trim())) {
            mostrarError('errorTelefono', 'Solo se permiten números');
            telefono.classList.add('error');
            isValid = false;
        }
    }

    const mensaje = document.getElementById('mensaje');
    if (mensaje.value.trim() === '') {
        mostrarError('errorMensaje', 'El mensaje es obligatorio');
        mensaje.classList.add('error');
        isValid = false;
    } else if (mensaje.value.trim().length < 10) {
        mostrarError('errorMensaje', 'El mensaje debe tener al menos 10 caracteres');
        mensaje.classList.add('error');
        isValid = false;
    }

    if (isValid) {
        alert('Formulario enviado correctamente (simulación)');
        // this.reset();
    }
});

function mostrarError(id, mensaje) {
    const errorDiv = document.getElementById(id);
    errorDiv.textContent = mensaje;
    errorDiv.style.display = 'block';
}

// COMMENT