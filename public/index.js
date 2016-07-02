    jQuery(window).load(function() {
      var retina = window.devicePixelRatio > 1 ? true : false;
      if (retina) {
        var retinaEl = jQuery("#logo img.logo-main");
        var retinaLogoW = retinaEl.width();
        var retinaLogoH = retinaEl.height();
        retinaEl.attr("src", "content/video/images/retina-video.png").width(retinaLogoW).height(retinaLogoH);
        var stickyEl = jQuery("#logo img.logo-sticky");
        var stickyLogoW = stickyEl.width();
        var stickyLogoH = stickyEl.height();
        stickyEl.attr("src", "content/video/images/sticky_retina_video.png").width(stickyLogoW).height(stickyLogoH);
      }
    });
  
  
  
    jQuery('#Content').show();
    jQuery('#Footer').show();

    var slideNumber = 1;
    var tid = null;
    startSlider();

    function scrollToAnchor(aid) {

      var aTag = jQuery("#" + aid);
      jQuery('html,body').animate({
        scrollTop: aTag.offset().top
      }, 'slow');

      jQuery('.overlay-menu-toggle').click();
    }

    function slideRight() {
      jQuery('#slide' + slideNumber).fadeOut();
      if (slideNumber == 3) {
        slideNumber = 1;
      } else {
        slideNumber++;
      }
      jQuery('#slide' + slideNumber).delay(1000).fadeIn();
    };

    function slideLeft() {
      jQuery('#slide' + slideNumber).fadeOut();
      if (slideNumber == 1) {
        slideNumber = 3;
      } else {
        slideNumber--;
      }
      jQuery('#slide' + slideNumber).delay(1000).fadeIn();
    };

    function scrollSlides() {
        slideRight();
    }
    function abortTimer() { // to be called when you want to stop the timer
      clearInterval(tid);
    }

    function setSlide(number){
      stopSlider();

      jQuery('#slide1').hide();
      jQuery('#slide2').hide();
      jQuery('#slide3').hide();

      slideNumber=number;

      jQuery('#slide' + slideNumber).delay(500).fadeIn();
    }

    function startStopSlider(){
        if(sliding){
          stopSlider();
        }
        else {
          startSlider();
        }
    }


    function startSlider() {
      tid = setInterval(scrollSlides, 8000);
      sliding = true;
    }

    function stopSlider(){
      abortTimer();
      sliding = false;
    }