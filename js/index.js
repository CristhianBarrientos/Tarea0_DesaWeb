document.addEventListener('DOMContentLoaded', () => {

    // Se declaran en constantes los elementos del html, para asignarles eventos y los demas para acceder a los valores colocados por el usuario
    const btnEnviar = document.getElementById("btnEnviar");
    const inputNombre = document.getElementById("inptNombre");
    const inputApellido = document.getElementById("inptApellido")
    const inputTelefono = document.getElementById("inputTelefono")
    const inputCorreo = document.getElementById("inputCorreo")
    const inputNacimiento = document.getElementById("inputFecha")
    const txtMensaje = document.getElementById("txtMensaje")

    // aqui se le asigna el evento click al boton
    btnEnviar.addEventListener("click", () => {
        // lo uso para validar que los campos no vengan vacios
        if (!inputNombre.value || !inputApellido.value || !inputTelefono.value || !inputCorreo.value || !inputNacimiento.value || !txtMensaje.value) {
            alert("Llena todos los datos antes de presionar Enviar");
        } else {
            // ta feo pero esta es la concatenacion de los campos , con un salto de linea para que se vea ordenado en el alert XD
            let datosPersonales = inputNombre.value + '\n' + inputApellido.value + '\n' + inputTelefono.value
                + '\n' + inputNacimiento.value + '\n' + txtMensaje.value
            alert(datosPersonales);

        }
    });

});
