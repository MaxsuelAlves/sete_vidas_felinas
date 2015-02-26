$(document).ready(function(){
	/* menu responsivo */

	// botao open
	var open = $('.open');
	var menu = $('.menu');
	// esconde menu
	menu.hide();
	open.on('click', function(e){
		e.preventDefault();
		menu.slideToggle();
	});

	// verifica o tamanho do viewport do navegador pra definir o menu
	if($(window).width() > 940) {
		menu.show();
		open.hide();
	}
	else {
		menu.hide();
		open.show();
	}
	// quando diminuir o navegador
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 800) {
			menu.show();
			open.hide();
		}
		else {
			menu.hide();
			open.show();
		}

	});

	// search
	var form_search = $('.form-search input');
	form_search.hide();
	$('.search').on('click', function(e){
		e.preventDefault();
		form_search.show();
		form_search.animate({
			"width": "145px"
		}, '500');
	});
	form_search.blur(function(){
		$(this).animate({
			"width": "0"
		}, '500', function(){
			$(this).hide();
		});
	});
});

// botao form
var form_dados = $('#minhaDiv');
form_dados.hide(); 	
$('.botao-oculto').on('click', function(){
	form_dados.slideToggle();
});

