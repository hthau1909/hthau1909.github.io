$(document).ready(function() {
  var mixer = mixitup('.portF');
  var nav = document.querySelector('nav');
  window.addEventListener('scroll', function () {
      if (window.pageYOffset > 100) {
        nav.classList.add('navbar-reduce', 'shadow');
      } else {
        nav.classList.remove('navbar-reduce', 'shadow');
      }
  });

  new TypeIt(".element", {
      speed: 50,
      loop: true,
  }).type("Salesforce Developer,", { delay: 300 })
  .delete(30)
  .type("UI/UX Designer,", { delay: 300 })
  .delete(50)
  .type("Web developer.", { delay: 300 })
  .go()

  //MixItUp Portfolio
  var mixer = mixitup('.portfolio-full');
  var mixer = mixitup('.portF');
  var mixer = mixitup('.portF', {
    selectors: {
      target: '.blog-item'
    },
    animation: {
      duration: 100
    }
  });
  // Portfolio Gallery
  $('.portfolio-item').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
  });

  $('.collapse.navbar-collapse .nav-link').click(function() {
    $('.collapse.navbar-collapse').toggleClass('show');
  });
});

