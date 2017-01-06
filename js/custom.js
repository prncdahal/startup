$(function(){
	
	 //window height
  var wheight = $(window).height(); //get height of the window

  $('.fullheight').css('height', wheight);

  $(window).resize(function() {
    var wheight = $(window).height(); //get height of the window
    $('.fullheight').css('height', wheight);
  }); //on resize


});

$(window).on('load',function(){
	$( ".inner-billboard" ).animate({
    opacity: 1,
    top: "25%",    
  }, 1000);
});