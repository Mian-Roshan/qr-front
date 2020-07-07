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
});