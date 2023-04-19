let formulario = document.getElementById("formDataUsuario");
let usuarios = [];

function Usuario(nombre, email, trabajo, telefono, descripcion) {
    this.nombre = nombre;
    this.email = email;
    this.trabajo = trabajo;
    this.telefono = telefono;
    this.descripcion = descripcion;
}

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    let nombre = usuarioName.value;
    let email = usuarioEmail.value;
    let trabajo = usuarioWork.value;
    let telefono = usuarioPhone.value;
    let descripcion = usuarioBio.value;

    let nuevoUsuario = new Usuario(
        nombre,
        email,
        trabajo,
        telefono,
        descripcion
    );
    usuarios.push(nuevoUsuario);
    mostrarInfo(nuevoUsuario);
    llenarTabla();
});

function mostrarInfo(usuario) {
    cardUsuarioNombre.innerText = usuario.nombre;
    cardUsuarioEmail.innerText = usuario.email;
    cardUsuarioTrabajo.innerText = usuario.trabajo;
    cardUsuarioDescripcion.innerText = usuario.descripcion;
}

function llenarTabla() {
    let acumulador = "";

    usuarios.forEach(function (usuario, index) {
        acumulador += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${usuario.nombre}</td>
                <td>${usuario.email}</td>
                <td>${usuario.trabajo}</td>
            </tr> 
        `;
    });
    let cuerpoTabla = document.querySelector(
        "#contenedorTablaUsuarios table tbody"
    );
    cuerpoTabla.innerHTML = acumulador;
}
