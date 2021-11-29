// USO DE JQUERY Y AJAX

$(document).ready(function(){
    // Para la seccion de contactos utilizo jquery para efectuar la limpieza de los inputs al clickear en el boton Limpiar
    $("#boton-limpiar").click(function(event) {
        $("#form-contacto")[0].reset();
    });

    $("#boton-enviar").click(function(event) {
        alert("Envio exitoso");
    });

    // Ajax 
    URLusers = 'https://jsonplaceholder.typicode.com/users';
    $.get(URLusers, (respuesta, estado1) => {
        if(estado1 === 'success'){
            var contador1 = 0;
            $('.btn-consultar-usuarios').click(function(event){
                $('.cuerpo-tabla1').append($(`<tr>
                <th scope="row">${respuesta[contador1].id}</th>
                <td>${respuesta[contador1].name}</td>
                <td>${respuesta[contador1].username}</td>
                <td>${respuesta[contador1].email}</td>
                </tr>`));
                contador1++;    
        })}
    });

    URLCharacters = 'http://hp-api.herokuapp.com/api/characters';
    $.get(URLCharacters, (respuesta2, estado2) => {
        var contador2 = 0;    
        if(estado2 === 'success'){
            $('.btn-consultar-personajes').click(function(event){
            $('.cuerpo-tabla2').append($(`<tr>
            <th scope="row">${contador2+1}</th>
            <td>${respuesta2[contador2].name}</td>
            <td>${respuesta2[contador2].species}</td>
            <td>${respuesta2[contador2].house}</td>
            </tr>`));
            contador2++;
        })}
    });
});
    