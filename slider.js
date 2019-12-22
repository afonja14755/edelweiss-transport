$(document).ready(function(){
    $('#main_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
		arrows: false,
		draggable: true,
		infinite: true,
        autoplay: true,
		autoplaySpeed: 3000,
		speed: 500,
	});
});