/**************************************************** 
					Page Flyouts
****************************************************/
$(function() {
	$('.work-icon').on('click', function() {
		$('.wrap').addClass('flyout');
    $('.work-wrap').toggleClass("active");
  });
});

$(function() {
  $('.logo').on('click', function() {
    $('.wrap').removeClass('flyout');
  });
});
$(function() {
  $('.info-icon').on('click', function() {
    $('.wrap').addClass('flyout');
    $('.info-wrap').toggleClass("active");
  });
});

$(function() {
  $('.logo').on('click', function() {
    $('.wrap').removeClass('flyout');
  });
});
/**************************************************** 
					Fixed Header 
****************************************************/
$(window).bind('scroll', function() {
   var pos = $(window).scrollTop();
   if (pos > 500)  { 
       $('.fixedheader').addClass('fixed');
   }
   else  {
       $('.fixedheader').removeClass('fixed');
   }
});