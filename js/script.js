$ (function(){

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
                      NFO FLYOUT
        *******************************************/
        var $info = $('.info-icon');
        var $work = $('.work-icon');
        var $logo = $('.logo');

          $info.on('click', function() {
            $('.info-wrap').toggleClass("active animated fadeInLeftBig");
           
            $('.info-wrap').css({
              'display': 'block',
              'position' : 'absolute',
              'right' : '-9999px'
            });
          });
          $logo.on('click', function() {
            $('.info-wrap').removeClass('active animated fadeInLeftBig');
          });
        /*******************************************
                      WORK FLYOUT
        *******************************************/
  
          $work.on('click', function() {
            $('.work-wrap').toggleClass("active animated fadeInRightBig");
           
            $('.work-wrap').css({
              'display': 'block',
              'position' : 'absolute',
              'right' : '9999px'
            });
          });
          $logo.on('click', function() {
            $('.work-wrap').removeClass('active animated fadeInRightBig');
          });
        
       
});