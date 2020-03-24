

    //===============MAGNIFIC-POPUP=====================
    $('.parent-container').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      // other options
      gallery: {
        // options for gallery
        enabled: true
      }
    });


    function validation () {
       
      var name = document.getElementById('name').value;
      var phone = document.getElementById('phone').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;
      var error_message = document.getElementById('error_message');
      var text;

     error_message.style.padding = '20px';

     if(name.length < 4) {

       text  = 'Please Enter Your Full Name and Not Less Than 4 Characters!';
       error_message.innerHTML = text;
       return false;
     }

     if(isNaN(phone) || phone.length < 10) {
      text  = 'Please Enter Valid Phone Number!';
      error_message.innerHTML = text;
      return false;
    }

    if(email.indexOf('@') == -1 || email.length < 5 || email.indexOf('.com') < 3 ) {
      text  = 'Please Enter Valid E-mail Address!';
      error_message.innerHTML = text;
      return false;
    }

    if(message.length <= 10) {
      text = 'Please Enter More Than 10 Characters! ';
      error_message.innerHTML = text;
      return false;
    }


    
      return ture;


    }



      // Get the Scrolling navbar
      $(window).scroll(function(){
        $('nav').toggleClass('scolled', $(this).scrollTop() > 700);  
    });

 //Intit Scroolspy
 $('body').scrollspy({target: '#main-nav'});

  // Smooth Scrolling
$("#main-nav a").on('click', function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () {

      window.location.hash = hash;
    });
  }
});

$('.slider').slick({
  infinite: true,
  slideToShow: 1,
  slideToScroll: 1
});

