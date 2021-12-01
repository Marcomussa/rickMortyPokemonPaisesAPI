//Espero que les sirva :)

//? Con Esta Funcion Hacemos Que Primero Ejecute Todo el Codigo HTML y Cuando Ya Cargo, Se Ejecute el Codigo JS. Ademas Nos Permite Escribir Los <script> Dentro del <head>
//Sintaxis jQuery: //! $(selector).accion()
	// $(selector).accion();
	/*
		$ - Indicamos Que Vamos Acceder a jQuery.
		selector - Accedemos al Elemento que Queramos Trabajar.
		accion - Lo que Queremos Hacer Con el Elementos Seleccionado.
	*/

$(document).ready(function(){ 
    alert('cucu')
})
// =
$(function(){})

//todo: Selectores. Permiten Seleccionar Elementos de la Pagina Para Darle Efectos, Animaciones, Etc.
//Acceder a un Elemento
$('h1').hide();
//Acceder a Dos Elementos
$('h1, h2').hide();
//Acceder a una Class
$('.encabezado').hide();
//Acceder a un ID
$('#boton').hide();

//todo: Efectos. 
$(selector).efecto(velocidad, callback)
//Ejemplo
$('.caja').hide(2000, function(){ //Cuando Pasen los 2 Segundos, Aparece 'oculto'
	alert('oculto')
})

$('.caja').show();
$('.caja').toggle();
$('.caja').toggleClass(); //Agrega una Clase. Si ya Posee la Clase se la va a Quitar
$('.caja').addClass();
$('.caja').removeClass();

// Fades
$('.caja').fadeIn(); //Sirve Para Mostrarlo
$('.caja').fadeOut(); //Sirve Para Ocultarlo
$('.caja').fadeToggle();

// Sliding
$('.caja').slideDown();
$('.caja').slideUp();
$('.caja').slideToggle();


//todo: Elementos del DOM con jQuery
//Acceder al Elemento Padre: (#caja = hijo ; #contenedor = padre)	
$('#caja').parent()

//Accede a TODOS los Elementos Padre
$('#caja').parents()

//Acceder a un Elemento Hijo
$('#padre').children('#tercera')

//Acceder a los TODOS los Elementos Hijo
$('#padre').children()

//Encadenar
$('#caja').parent().css({
	background: '#000'
})

$('#padre').children().fadeOut()

//Find. Busca en Todos los Niveles
$('#contenedor').find('div.caja' /*Divs con la Clase caja*/ )

//Siblings. Accede a TODOS los Elementos Hermanos
$('#tercera').siblings()

//Next - Prev
$('#tercera').next().css({
	background: '#000'
});

$('#tercera').nextAll().css({
	background: '#000'
});

$('#tercera').prev().css({
	background: '#000'
});

$('#tercera').prevAll().css({
	background: '#000'
});

//todo: Metodos Para Filtrar Elementos del DOM. (Acceder a Estos desde una Forma mas Avanzada)
//Elegir Cual Div con la class = 'caja' Selecciono
$('.caja').eq(0)

$('.caja').first()
$('.caja').last()

$('.caja').filter('.azul')  //Selecciona las .cajas Que Tengas .azul

$('.caja').not('.azul')  //Selecciona las .cajas y Excluye .azul


//todo: Eventos. on()
//? Buena Practica al Trabajar con Funciones:

//Eventos con Funcion	
var boton = $('#boton')
function saludo(){ 
	alert('Hello World') 
}
boton.click(saludo)

//Eventos con Fallback
$('#boton').on('click', function(){}) // <-- Manera Correcta ('evento', 'funcion')

//? Click = On. Pero Poseen Diferente Sintaxis

//Eliminar Eventos. 
$('#activar').on('click', function(){
	alert('hola')
})
$('#desactivar').on('click', function(){
	$('#activar').off()
})

//Prevenir Comportamiento de Enlaces
$('a').on('click', function(e){ //Importante Asignar un Parametro a la Funcion
	e.preventDefault() //Prevenir Eventos
	alert('Link Desactivado') 
})

//todo: Palabra Reservada This

var cajas = $('.caja')

//Si Cambia una, Cambian Todas de Color. Agrega la clase '.color' a Todos los Elementos con la clase '.caja'
cajas.on('click', function(){
	cajas.toggleClass('color')
})

//Asi No. Cambia una x una. Agrega la clase '.color' Unicamente al Elemento Seleccionado
cajas.on('click', function(){
	$(this).toggleClass('color')
})

//todo: Animaciones. Colores No Funcionan
// $(selector).animate({Parametros}, Velocidad, Callback);
$('#boton').on('click', function(){
	$('#caja').animate({ width: '30px'}, 200, console.log('Se Agrando 30px')) //Su Valor del width Pasa de ser de 150px a 30px
})

// += 'Aumenta su Valor Desde su Valor Original'. De 150px Pasa a 180px y Asi Sucesivamente
// -= 'Igual Pero Decrece'. De 150px Pasa a 120px
$('#boton').on('click', function(){
	$('#caja').animate({ width: '+=30px'}, 200, console.log('Se Agrando 30px'))
})
$('#boton').on('click', function(){
	$('#caja').animate({ marginLeft: '+=30px'}, 200, console.log('Se Agrando 30px'))
})

//Animaciones Desde CSS; Guardar la Animacion en una clase e Importarla en jQuery 
$('#boton').on('click', function(){
	$('#caja').addClass('animacion') 
})

//Se Puede Ejecutar Mas de una Animacion en una Misma Funcion
$(document).ready(function(){
    $('#boton').on('click', function(){
        $('#caja').animate({
            marginLeft: '+=300px'
        }, 300)
        $('#caja').animate({
            marginLeft: '-=900px'
        }, 900)
        $('#caja').animate({
            marginLeft: '+=600px'
        }, 900)
    })
})

//todo: Metodo Stop. Detener Animaciones 
//.stop(limpiarAnimaciones, Saltar al final);
//.stop(true, false);
$('#botonDetener').on('click', function(){
	$('#caja').stop(true, true)
})

//todo: Manipulando el DOM
$('#titulo').text('Titulo Cambiado') //Editar Contenido

$('#titulo').html('<u>Titulo Cambiado</u>') //Editar Contenido con HTML

$('#titulo').text(nombre.val()) //.val() Accede al Valor que fue Indicado. ej:
var input = $('#input')
input.on('change', function(){
	$('#titulo').text(nombre.val())
})

//Modificar Atributos
// $().attr(atributo, valor)
$('#enlace').attr('href', 'https://goole.com')

	// Multiples atributos.
	$('#enlace').attr({
		'class': 'azul',
		'target': '_blank'
	});	

//Crear Nuevos Elementos y Contenidos al DOM
$('<div> </div>')

//Agregar una Caja
var contenedor = $('#contenedor')
var contador = 1

$('#agregar').on('click', function(){
	var caja = $('<div> </div>').attr('class','caja').text(contador)
	contador++

	contenedor.append(caja) //De Menor a Mayor

	contenedor.prepend(caja) //De Mayor a Menor

	contenedor.before(caja) //Agrega la Caja Antes del Contenedor

	contenedor.after(caja) //Agrega la Caja Despues del Contenedor

})

//! Eliminando Elementos del DOM
$('#caja').remove()

$('#contenedor').children(0).remove()

//todo: Trabajando con las Clases de CSS en jQuery
//Es Recomendable No Editar ni Agregar Codigo CSS Desde Js. Si es Recomendable Crear Una Clase con los Estilos e Importarla en Js.

//todo: Calcular Medidas
var titulo = $('#titulo');
var info = $('#info');

//? .width()
// Calcula el ancho del elemento
info.append('Ancho: ' + titulo.width() + '<br>');

// Calcula el ancho del elemento + el padding
info.append('Ancho Interno: ' + titulo.innerWidth() + '<br>');

// Calcula el ancho del elemento + el padding + el borde
info.append('Ancho Externo: ' + titulo.outerWidth() + '<br>');

// Calcula el ancho del elemento + el padding + el borde + margin
info.append('Ancho Externo: ' + titulo.outerWidth(true) + '<br>');

//? .height()
// Calcula el alto del elemento
info.append('Alto: ' + titulo.height() + '<br>');

// Calcula el alto del elemento + el padding
info.append('Alto Interno: ' + titulo.innerHeight() + '<br>');

// Calcula el alto del elemento + el padding + el borde
info.append('Alto Externo: ' + titulo.outerHeight() + '<br>');

// Calcula el alto del elemento + el padding + el borde + margin
info.append('Alto Externo: ' + titulo.outerHeight(true) + '<br>');



