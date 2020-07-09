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
});