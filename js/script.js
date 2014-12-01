$ (document).ready(function(){

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
            $('.work-wrap').toggleClass("active");
          });
          $('.logo').on('click', function() {
            $('.work-wrap').removeClass('active');
          });
          $('.work-icon').on('click', function() {
            $('.work-wrap.active').slideToggle('.active slow');
          });
        });
        $(function() {
          $('.work-icon').on('click', function() {
            $('.work-wrap.active').slideToggle('.active slow');
          });
        });
     

        /*******************************************
                      NFO FLYOUT
        *******************************************/
        $(function() {
          $('.info-icon').on('click', function() {
            $('.info-wrap').toggleClass("active");
          });
        });
         
        $(function() {
          $('.logo').on('click', function() {
            $('.info-wrap').removeClass('active');
          });
        });
});