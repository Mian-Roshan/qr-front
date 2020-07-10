$(document).ready(function(){
    $('.menuBtn').click(function() {
		$(this).toggleClass('act');
		if($(this).hasClass('act')) {
			$('.mainMenu').addClass('act');
			$('body').addClass('overflow-hidden');
		}
		else {
			$('.mainMenu').removeClass('act');
			$('body').removeClass('overflow-hidden');
		}
	});
	$('.modal-trigger').on('click', function(){
	 var popup = $(this).attr('data-target');
	 $('.modal').modal('hide');
	 $('.modal').hide();
	 $(popup).modal('show');
	});
	$('.c-o-js').on("shown.bs.modal", function() {
		$("body").addClass("modal-open");
		$('.c-o-js').show();
	});
	  $('.c-o-js').on("hide.bs.modal", function() {
		$('.modal-backdrop').remove();
		$('.c-o-js').hide();
	});
	function nav_sticky(){ 
		var scroll = $(window).scrollTop();
		if (scroll > 110) {
			$(".navbar-qr").addClass("sticky");
			$('.layer').css('height' , '600px');
			$('.menuBtn').css('top', '21px');
			
		}else{
			$(".navbar-qr").removeClass("sticky");
			$('.layer').css('height' , '810px');
			$('.menuBtn').css('top', '40px');
		}
	}
	nav_sticky();
	$(window).scroll(function() {    
		nav_sticky();
	});
	$('.navbar-qr ul li a').on('click', function(){
		var target = $(this).attr('href');
		var nav_h = $('header .navbar-qr').outerHeight();
		$('html,body').animate({scrollTop: $(target).offset().top - nav_h - 80}, 1500);
		e.preventDefault();
	})
});