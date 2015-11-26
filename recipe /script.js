$(document).ready(function(){
	
$('#ingredients > li').click(function() {
		$(this).toggleClass('highlighted');
	});

$('button').click(function(){
	 $('.headerPic, .methodPic').toggle('slow');
});


});

