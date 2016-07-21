jQuery(window).load(function () {
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
//jQuery('#Footer').show();

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

function setSlide(number) {
  stopSlider();

  jQuery('#slide1').hide();
  jQuery('#slide2').hide();
  jQuery('#slide3').hide();

  slideNumber = number;

  jQuery('#slide' + slideNumber).delay(500).fadeIn();
}

function startStopSlider() {
  if (sliding) {
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

function stopSlider() {
  abortTimer();
  sliding = false;
}

function validateEmail(x) {
  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
    return false;
  }
  return true;
}


function showForm3() {
		jQuery('#getHiredForm2').hide();
		jQuery('#getHiredForm3').show();
  jQuery('#uploadCVLink').css('visibility', 'visible').hide().fadeIn();

}


function ShowThankYouMessage() {
		jQuery('#getHiredForm3').fadeOut();
		jQuery('#thankYouDiv').show();
		setTimeout(function () {
    jQuery('#thankYouText1').fadeIn(1200);
		}, 300);

		setTimeout(function () {
    typeThankYou();
		}, 1500);
}

function showForm2() {

  var txtName = jQuery('#txtName');
  if (txtName.val().trim().length == 0) {
    txtName.css('border-color', 'red');
    return;
  }
  else {
    txtName.css('border-color', '');
  }

  var txtEmail = jQuery('#txtEmail');
  if (!validateEmail(txtEmail.val())) {
    txtEmail.css('border-color', 'red');
    return;
  }
  else {
    txtEmail.css('border-color', '');
  }

  jQuery('#getHiredForm1').hide();
  jQuery('#getHiredForm2').fadeIn();
  typeSkillsets();
  setTimeout(function () {
    jQuery('#tagsDiv').css('visibility', 'visible').hide().fadeIn();
  }, 1000);
}

var i1 = 0, i2 = 0, i3 = 0, i4 = 0,
		whatIsYourNameText = "Please tell us your name ",
		whatAreYourSkillsText = "What are your top 5 skills? ",
		thankYouText = "We will get in touch soon. ",
		emailText = "and your e-mail ",
		isTag = false;

function typeName() {

		var text = whatIsYourNameText.slice(0, ++i1);
		if (text === whatIsYourNameText) return;

		document.getElementById('whatIsYourNameText').innerHTML = text;

		var char = text.slice(-1);
		if (char === '<') isTag = true;
		if (char === '>') isTag = false;

		if (isTag) return typeName();
		setTimeout(typeName, 80);
};


function typeSkillsets() {

		var text = whatAreYourSkillsText.slice(0, ++i2);
		if (text === whatAreYourSkillsText) return;

		document.getElementById('whatAreYourSkillsText').innerHTML = text;

		var char = text.slice(-1);
		if (char === '<') isTag = true;
		if (char === '>') isTag = false;

		if (isTag) return typeSkillsets();
		setTimeout(typeSkillsets, 80);
};

function typeEmail() {

		var text = emailText.slice(0, ++i3);
		if (text === emailText) return;

		document.getElementById('emailText').innerHTML = text;

		var char = text.slice(-1);
		if (char === '<') isTag = true;
		if (char === '>') isTag = false;

		if (isTag) return typeEmail();
		setTimeout(typeEmail, 80);
};


function typeThankYou() {

		var text = thankYouText.slice(0, ++i4);
		if (text === thankYouText) return;

		document.getElementById('thankYouText').innerHTML = text;

		var char = text.slice(-1);
		if (char === '<') isTag = true;
		if (char === '>') isTag = false;

		if (isTag) return typeThankYou();
		setTimeout(typeThankYou, 80);
};
/* ---------------------------------------------------------------------------
 * Overlay menu
 * --------------------------------------------------------------------------- */
var overlayOpen = false;
jQuery('.overlay-menu-toggle').click(function (e) {
		e.preventDefault();

		var getHiredDiv = jQuery("#overlay-menu-gethired");
		getHiredDiv.hide();

		var navMenu = jQuery('#overlay-menu');

		if (!overlayOpen) {
    overlayOpen = true;
    var navMenu = jQuery('#overlay-menu');
    navMenu.show();
		}
		else {
    overlayOpen = false;
		}

		jQuery(this).toggleClass('focus');
		jQuery('#Overlay').stop(true, true).fadeToggle(500);

		var menuH = navMenu.height() / 2;
		jQuery('#Overlay nav').css('margin-top', '-' + menuH + 'px');

});


/* ---------------------------------------------------------------------------
 * Get hired overlay
 * --------------------------------------------------------------------------- */
jQuery('#getHired').click(function (e) {
		e.preventDefault();

		var navMenu = jQuery('#overlay-menu');
		navMenu.hide();

		var getHiredDiv = jQuery("#overlay-menu-gethired");
		getHiredDiv.show();
		overlayOpen = true;

		jQuery('.overlay-menu-toggle').toggleClass('focus');
		jQuery('#Overlay').stop(true, true).fadeToggle(500);

		if (!formCompleted) {
    var menuH = getHiredDiv.height() / 2;
    menuH += 50;
    getHiredDiv.css('margin-top', '-' + menuH + 'px');

    typeName();
    setTimeout(function () { jQuery('#txtName').css('visibility', 'visible').hide().fadeIn(); document.getElementById('txtName').focus(); }, 2000);
		}

});

var txtNameKeyDowned = false;
jQuery('#txtName').keydown(function (e) {
		if (txtNameKeyDowned)
    return;
		txtNameKeyDowned = true;
		setTimeout(function () {
    typeEmail();
    setTimeout(function () {
      jQuery('#txtEmail').css('visibility', 'visible').hide().fadeIn();
    }, 1500);
		}, 500);
});

var txtEmailKeyDowned = false;
jQuery('#txtEmail').keydown(function (e) {
		if (txtEmailKeyDowned)
    return;
		txtEmailKeyDowned = true;
		setTimeout(function () {
    jQuery('#nextLink1').css('visibility', 'visible').hide().fadeIn();
		}, 500);
});

var skillClicked = false;
jQuery('.skillButton').click(function (e) {
		if (!skillClicked) {
    skillClicked = true;
    jQuery('#nextLink2').css('visibility', 'visible').hide().fadeIn();
		}

		var skillButton = jQuery(this);
		if (skillButton.hasClass("tagSelected")) {
    skillButton.removeClass("tagSelected");
		}
		else {
    skillButton.addClass("tagSelected");
		}

});

jQuery('#uploadCV').change(function (e) {
		var filename = this.value.replace(/^.*[\\\/]/, '');
		jQuery('#txtFilename').val(filename);
		jQuery('#txtFilename').css('visibility', 'visible').hide().fadeIn();
		jQuery('#acceptDiv').css('visibility', 'visible').hide().fadeIn();
  jQuery('#txtFilename').css('border-color', '');
});

var formCompleted = false;
jQuery('#btnOkGetHired').click(function (e) {
  e.preventDefault();
  var file = jQuery('#uploadCV').prop('files')[0];
  if (!file || !file.name || !file.name.trim().length > 0 || !file.name.endsWith('.pdf')) {
    jQuery('#txtFilename').css('border-color', 'red');
    jQuery('#uploadErrorText').css('visibility', 'visible').hide().fadeIn();
  }
  else {
    sendFile(file);
  }
});


function sendFile(file) {

  //show progress 

  var uri = "/uploadPDF";
  var xhr = new XMLHttpRequest();
  var fd = new FormData();

  xhr.open("POST", uri, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {

      //hide progress

      var uploadedFileUrl = xhr.responseText;

      jQuery.ajax({
        type: "POST",
        url: "http://localhost/api/talent",
        data: {
          "name": jQuery('#txtName').val(),
          "email": jQuery('#txtEmail').val(), 
          "skills": ["c#", "javascript", "html", "nodejs"], 
          "cvURL": uploadedFileUrl
        },
        success: function (res) {
          console.log(res);
        },
        dataType: "json"
      });



      //post to api for creating talent...

      ShowThankYouMessage();
      formCompleted = true;

    } else {
      //check for errors.
      //if error, hide progress, show message.
    }
  };

  fd.append('file', file);
  xhr.send(fd);
}