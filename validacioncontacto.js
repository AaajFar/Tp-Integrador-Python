document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('formGroupExampleInput').value;
    if (usuario.length == 0) {
        alert('Por favor ingrese su nombre');
        return;
    }
    var apellido = document.getElementById('formGroupExampleInput2').value;
    if (apellido.length == 0) {
        alert('Por favor ingrese su apellido');
        return;
    }
    var mail = document.getElementById('exampleFormControlInput1').value;
    if (mail.length == 0) {
        alert('Por favor ingrese su mail');
        return;
    }
    var consulta = document.getElementById('exampleFormControlTextarea1').value;
    if (consulta.length == 0) {
        alert('Por favor ingrese su consulta');
        return;
    }
    this.submit();
    alert('Muchas gracias por su consulta, nos contactaremos a la brevedad')
}