document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    var nameInput = document.getElementById('name').value.trim();
    var subjectInput = document.getElementById('subject').value.trim();
    var messageInput = document.getElementById('message').value.trim();

    // Validador de caracteres alfabticos de la A a la Z.
    var regex = /^[A-Za-z]+$/;

    var valid = true;

    // Verificar si el nombre es valido
    if (!nameInput || !regex.test(nameInput)) {
        showError('Ingresa un nombre válido.', 'name');
        valid = false;
    } else {
        removeError('name');
    }

    // Verifica si esta asunto esta completo
    if (!subjectInput || !regex.test(subjectInput)) {
        showError('Ingresa un asunto válido.', 'subject');
        valid = false;
    } else {
        removeError('subject');
    }

    if (valid) {
        showSuccess();
    }
});

function showError(errorMessage, inputId) {
    var errorSpan = document.getElementById(inputId + '-error');
    if (!errorSpan) {
        errorSpan = document.createElement('span');
        errorSpan.id = inputId + '-error';
        errorSpan.classList.add('error');
        var inputField = document.getElementById(inputId);
        inputField.insertAdjacentElement('afterend', errorSpan);
    }
    errorSpan.textContent = errorMessage;
}

function removeError(inputId) {
    var errorSpan = document.getElementById(inputId + '-error');
    if (errorSpan) {
        errorSpan.remove();
    }
}

function showSuccess() {
    var submitButton = document.querySelector('button[type="submit"]');
    submitButton.textContent = 'Formulario enviado con éxito';
}
// --------------------------------------------------------------
// Ejercicio N2

// document.addEventListener('DOMContentLoaded', function() {
//     var colorOptions = document.querySelectorAll('.color-option');
//     var colorPalette = document.getElementById('colorPalette');

//     colorOptions.forEach(function(colorOption) {
//         colorOption.addEventListener('click', function() {
//             var color = this.style.backgroundColor;
//             colorPalette.style.backgroundColor = color;
//         });
//     });
// });


// --------------------------------------------------------------
// Ejercicio N3

// document.addEventListener('DOMContentLoaded', function() {
//     var resultadoElement = document.getElementById('resultado');
//     var sumarButton = document.getElementById('sumar');
//     var restarButton = document.getElementById('restar');

//     sumarButton.addEventListener('click', function() {
//         var numero1 = parseFloat(document.getElementById('numero1').value);
//         var numero2 = parseFloat(document.getElementById('numero2').value);
//         var resultado = numero1 + numero2;
//         resultadoElement.textContent = resultado;
//     });

//     restarButton.addEventListener('click', function() {
//         var numero1 = parseFloat(document.getElementById('numero1').value);
//         var numero2 = parseFloat(document.getElementById('numero2').value);
//         var resultado = numero1 - numero2;
//         resultadoElement.textContent = resultado < 0 ? 0 : resultado;
//     });
// });
