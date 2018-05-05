/*Modal zoom imagen*/
$('.galeria__img').click(function (e) {
	var img = e.target.src;
	var num = e.target.id;

	var modal = '<div id="modal" class="modal"><a class="prev" href="">&#60</a><img src="' + img + '" class="modal__img" id="ed"><a class="next" href="">></a><div class="modal__boton">X</div></div>';
	$('body').append(modal);
/*Retirar modal*/
	$('.modal__boton').click(function () {
			$('#modal').remove();
	});
/*Adelantar y retroceder*/
	$('.prev').click(function () {		
		var imagen = document.getElementById("ed");		
		num--;
		if (num < 1)
			num = 5;
		imagen.src="img/"+num+".jpg";
		return false;
		});
		
	$('.next').click(function () {		
	var imagen = document.getElementById("ed");		
	num++;
	if (num > 5)
		num = 1;
	imagen.src="img/"+num+".jpg";
	return false;
	});
		
	});
/*salir con teclado */
$(document).keyup(function (e) {
	if (e.which = 27) {
		$('#modal').remove();
	}
})
