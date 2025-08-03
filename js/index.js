document.addEventListener('DOMContentLoaded', () => {
    const btnEnviar = document.getElementById("btnEnviar");
    const inputNombre = document.getElementById("inptNombre");
    const inputApellido = document.getElementById("inptApellido")
    const inputTelefono = document.getElementById("inputTelefono")
    const inputCorreo = document.getElementById("inputCorreo")
    const inputNacimiento = document.getElementById("inputFecha")
    const txtMensaje = document.getElementById("txtMensaje")


    btnEnviar.addEventListener("click", () => {
        if (!inputNombre.value || !inputApellido.value || !inputTelefono.value || !inputCorreo.value || !inputNacimiento.value || !txtMensaje.value) {
            alert("Llena todos los datos antes de presionar Enviar");

        } else {
            let datosPersonales = inputNombre.value + '\n' + inputApellido.value + '\n' + inputTelefono.value
                + '\n' + inputNacimiento.value + '\n' + txtMensaje.value
            alert(datosPersonales);

        }
    });

});

// const validarCorreo = () => {
//  let regexEmail = "/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)/"
// }


// <input type="text" id="inptNombre" placeholder="Ingrese sus Nombres" required>
// <input type="text" id="inptApellido" placeholder="Ingrese sus Apellidos" required>
// <input type="number" id="inputTelefono" placeholder="Ingrese su Numero de Telefono" required>
// <input type="email" id="inputCorreo" placeholder="Ingresa tu Correo Electronico" required>
// <input type="date" id="inputFecha" placeholder="Ingresa tu fecha de Nacimiento" required>
// <!-- <input type="text" id="" placeholder="Ingrese aqui su Mensaje"> -->
// <textarea id="txtMensaje" rows="8" maxlength="450" placeholder="Escribe Aqui tu Mensaje" required></textarea>