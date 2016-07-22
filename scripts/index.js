$(function(){
	$(window).on("load resize", function(){
		$(".fill-screen").css("height", window.innerHeight);

		

	});

	// $('body').scrollspy({
	// 	target:'.navbar',
	// 	offset:121
	// });

	// $('body').on('activate.bs.scrollspy', function () {
	// 	debugger;
 //  		console.log("yo");
 //  		// alert("I am an alert box!");
	// });

	$('nav a, .down-button a').bind('click',function(){
		var offset = $('nav').outerHeight();
		console.log('offset = ' + offset);
		$('html,body').stop().animate({
			scrollTop:$($(this).attr('href')).offset().top-offset
		},1500,'easeInOutExpo');
		event.preventDefault();
	});





});