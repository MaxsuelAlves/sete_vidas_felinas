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
		if(w > 939) {
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

	// toggle alterar dados
	$('#form-dados').hide();
	$('.botao-oculto').on('click', function(){
		$('#form-dados').slideToggle();
	});
	// toggle filtros
	$('.filtros-form-1').hide();
	$('.filtros-1').on('click', function(e){
		e.preventDefault();
		$('.filtros-form-1').slideToggle();
	});
	$('.tabela-shop tr:even').addClass('tabela-cor');

	var linha;
	$('.fa-trash').on('click', function(e){
		e.preventDefault();
		var confirm = window.confirm('Deseja Remover?');
		if(confirm) {
			linha = $(this).parents('tr');
			linha.fadeOut();
		}
	});
	$('.form-busca').hide();
	$('.search').on('click', function(){
		if($(this).hasClass('on-search')){
			$('.form-busca').fadeIn();
		}
		else {
			$('.form-busca').fadeOut();
		}
		$('.search').toggleClass('on-search');
	});
	$('.form-busca input').blur(function(){
		$('.form-busca').fadeOut();
		$('.search').toggleClass('on-search');
	});

	// pedidos anteriores botao
	$('.tabela').hide();
	$('.pedidos_anteriores').on('click', function(e){
		e.preventDefault();
		if($('.tabela').hasClass('active')) {
			$('.tabela').fadeIn();
		}
		else {
			$('.tabela').fadeOut();
		}
		$('.tabela').toggleClass('active');
	});
});


