
jQuery('#Content').show();
jQuery('#Footer').show();

// scrollSlides();
// var sliding = true;

function scrollToAnchor(aid) {

  var aTag = jQuery("#" + aid);
  jQuery('html,body').animate({
    scrollTop: aTag.offset().top
  }, 'slow');

  jQuery('.overlay-menu-toggle').click();
}

  // var slideNumber = 1;
  // function slideRight() {
  //   jQuery('#slide' + slideNumber).fadeOut();
  //   if (slideNumber == 3) {
  //     slideNumber = 1;
  //   } else {
  //     slideNumber++;
  //   }
  //   jQuery('#slide' + slideNumber).delay(1000).fadeIn();
  // };
  //
  // function slideLeft() {
  //   jQuery('#slide' + slideNumber).fadeOut();
  //   if (slideNumber == 1) {
  //     slideNumber = 3;
  //   } else {
  //     slideNumber--;
  //   }
  //   jQuery('#slide' + slideNumber).delay(1000).fadeIn();
  // };
  //
  // var tid = setInterval(scrollSlides, 6000);
  // function scrollSlides() {
  //     slideRight();
  // }
  // function abortTimer() { // to be called when you want to stop the timer
  //   clearInterval(tid);
  // }

  // function setSlide(number){
  //   jQuery('#slide1').hide();
  //   jQuery('#slide2').hide();
  //   jQuery('#slide3').hide();
  //   startStopSlider();
  //   slideNumber=number;
  //   jQuery('#slide' + slideNumber).delay(500).fadeIn();
  //   //setTimeout(startStopSlider(), 5000);
  // }
  //
  // function startStopSlider(){
  //     if(sliding){
  //       abortTimer();
  //       sliding = false;
  //     }
  //     else {
  //       tid = setInterval(scrollSlides, 6000);
  //       sliding = true;
  //     }
  // }
