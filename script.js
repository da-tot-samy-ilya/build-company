$(document).ready(function() {
	
	$('.references_item-1').click(function(e){
	  $('html,body').stop().animate({ scrollTop: 
	  	$('#conceptions').offset().top }, 1200);
	  e.preventDefault();
	});
	
	$('.references_item-2').click(function(e){
	  $('html,body').stop().animate({ scrollTop: 
	  	$('#plan').offset().top }, 1200);
	  e.preventDefault();
	});
	
	$('.references_item-3').click(function(e){
	  $('html,body').stop().animate({ scrollTop: 
	  	$('#portfolio').offset().top }, 1700);
	  e.preventDefault();
	});
	
	$('.references_item-4').click(function(e){
	  $('html,body').stop().animate({ scrollTop: 
	  	$('#video').offset().top }, 2500);
	  e.preventDefault();
	});
	
	$('references_item-5').click(function(e){
	  $('html,body').stop().animate({ scrollTop: 
	  	$('#presentation').offset().top }, 3000);
	  e.preventDefault();
    });
    $('references_item-6').click(function(e){
        $('html,body').stop().animate({ scrollTop: 
            $('#footer').offset().top }, 3000);
        e.preventDefault();
      });

	//Открывающееся меню
	$('.menu-icon').click(function () {
		if ( $('.references_item').hasClass("nav-menu-show") ) {
			$('.references_item').removeClass("nav-menu-show");
		} else {
			$('.references_item').addClass("nav-menu-show");			
		}
	});
});