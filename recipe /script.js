$(document).ready(function(){
	
$('#ingredientslist > li').click(function() {
		$(this).toggleClass('highlighted');
	});

$('#hide').click(function(){
	 $('.headerPic').toggle('slow');
});

$('#directionbutton').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $('#method').offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

});


