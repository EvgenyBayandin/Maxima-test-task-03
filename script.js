$('#slider').slick({
	Infinity: true,
	prevArrow: '<div class="slick-own-btn own-btn-prev"><div><</div>',
	nextArrow: '<div class="slick-own-btn own-btn-next">></div>',
});

$(document).ready(function() {
	$("#open-create-user").click(function(){
		$("#user-modal").fadeIn(200);
	});

	$(".close").click(function(){
		$("#user-modal").fadeOut(200);
	});
});