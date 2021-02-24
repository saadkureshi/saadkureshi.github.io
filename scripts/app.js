$(function(){

  // Typewriter effect on name.
  let textToBeTyped = "Hi, I'm Saad Kureshi";
  let i = 0;

  function typeWriter() {
    if (i < textToBeTyped.length) {
      $(".header__my-name").text(
        $(".header__my-name").text() + textToBeTyped[i]
      )
      i++;
      setTimeout(typeWriter, 40)
    }
  }

  typeWriter();
  $(".header__my-intro").fadeIn(1500);

  // Setting footer year automatically.
  function setFooterDate() {
    let currentYear = new Date().getFullYear();
    $(".footer__date").text(currentYear + ".")
  }
  setFooterDate();

  // Refreshes page when logo is clicked.
  $(".navbar__sk-logo").on("click", function() {
    location.reload();
  })

  // Does the buzz out effect for about.
  $(".navbar__about").on("click", function() {
    const aboutContainer = document.getElementsByClassName('about-container')[0]
    aboutContainer.classList.remove('hvr-buzz-out');
    void aboutContainer.offsetWidth;
    aboutContainer.classList.add('hvr-buzz-out');
  })

  // Does the buzz out effect for contact.
  $(".navbar__contact").on("click", function() {
    const contactContainer = document.getElementsByClassName('contact-container')[0]
    contactContainer.classList.remove('hvr-buzz-out');
    void contactContainer.offsetWidth;
    contactContainer.classList.add('hvr-buzz-out');
  })

  // Transforms the navbar to the mobile-friendly version.
  $(".fa-bars").on("click", function() {
    $(".navbar").toggleClass("navbar-height-toggle");
    $(".navbar__burger-menu").toggleClass("navbar-bm-toggle");
    $(".header__my-name").toggleClass("header__my-name-toggle");
  })

  // Closes expaned menu after clicking an option.
  $(".navbar-bm__dropdown-box").children().on("click", function() {
    $(".navbar").toggleClass("navbar-height-toggle");
    $(".navbar__burger-menu").toggleClass("navbar-bm-toggle");
    $(".header__my-name").toggleClass("header__my-name-toggle");
  })

  // Scroll to Projects section when Projects is clicked on web version.
  $(".navbar__projects").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top - 50
    }, 800);
  });

  // Scroll to About/Contact section when About or Contact are clicked on web version.
  $(".navbar__about, .navbar__contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#about-and-contact-container").offset().top - 50
    }, 800);
  });

  // TinyApp Github redirect
  $(".project-link-tinyapp").on("click", function() {
    window.open("https://github.com/saadkureshi/tinyapp");
  })

  // Scheduler Github redirect
  $(".project-link-scheduler").on("click", function() {
    window.open("https://github.com/saadkureshi/scheduler");
  })

  // Amazon Clone Github redirect
  $(".project-link-amazon").on("click", function() {
    window.open("https://github.com/saadkureshi/amazon-clone");
  })

  // Tweeter Github redirect
  $(".project-link-tweeter").on("click", function() {
    window.open("https://github.com/saadkureshi/tweeter");
  })

  // Sneek Github redirect
  $(".project-link-sneek").on("click", function() {
    window.open("https://github.com/saadkureshi/LighthouseMarketplace-Buy-Sell-Listing-Website");
  })

  // Jungle Github redirect
  $(".project-link-jungle").on("click", function() {
    window.open("https://github.com/saadkureshi/jungle-rails");
  })

  // TypeCraft Github redirect
  $(".project-link-typecraft").on("click", function() {
    window.open("https://github.com/saadkureshi/final-project-lhl");
  })

})