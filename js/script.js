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

/**************************************************** 
					Page Flyouts
****************************************************/
      
      /*******************************************
                    WORK FLYOUT
      *******************************************/
      $(function() {
        $('.work-icon').on('click', function() {
          $('.wrap').toggleClass('flyout');
          $('.work-wrap').toggleClass("active");
        });
      });

      $(function() {
        $('.logo').on('click', function() {
          $('.wrap').removeClass('flyout');
        });
      });

      /*******************************************
                    NFO FLYOUT
      *******************************************/
      $(function() {
        $('.info-icon').on('click', function() {
          $('.wrap').toggleClass('flyout');
          $('.info-wrap').toggleClass("active");
        });
      });

      $(function() {
        $('.logo').on('click', function() {
          $('.wrap').removeClass('flyout');
        });
      });

