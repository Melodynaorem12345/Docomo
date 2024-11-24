(function ($) {
  "use strict";
  $(".sidebar-toggle-button").on("click", function () {
    $(this).toggleClass("active");
    $(".dashboard-sidebar-wrapper").toggleClass("slide");
    $(".main-content").toggleClass("slide");
    $(".dashboard-footer").toggleClass("slide");
  });
  jQuery(window).on("load", function () {
    $(".preloader").delay(1600).fadeOut("slow");
  });
  $(".preloader-close-btn").on("click", function () {
    $(".preloader").addClass("close");
  });
  $(function () {
    $(".transport-type ul li").on("click", function () {
      $(".transport-type ul li").removeClass("active");
      if ($(this).hasClass("privet")) {
        $("#forPrivet").show();
        $("#forPublic").hide();
      } else if ($(this).hasClass("public")) {
        $("#forPublic").show();
        $("#forPrivet").hide();
      } else {
        $("#StripePayment").hide();
        $("#OfflinePayment").hide();
      }
    });
  });
  $("[data-countdown]").each(function () {
    var $deadline = new Date($(this).data("countdown")).getTime();
    var $dataDays = $(this).children("[data-days]");
    var $dataHours = $(this).children("[data-hours]");
    var $dataMinutes = $(this).children("[data-minutes]");
    var $dataSeconds = $(this).children("[data-seconds]");
    var x = setInterval(function () {
      var now = new Date().getTime();
      var t = $deadline - now;
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((t % (1000 * 60)) / 1000);
      $dataDays.html(`${days} <span>Days</span> <span>D</span>`);
      $dataHours.html(`${hours} <span>Hours</span> <span>H</span>`);
      $dataMinutes.html(`${minutes} <span>Minutes</span> <span>M</span>`);
      $dataSeconds.html(`${seconds} <span>Seconds</span> <span>S</span>`);
      if (t <= 0) {
        clearInterval(x);
        $dataDays.html("00 <span>Days</span> <span>D</span>");
        $dataHours.html("00 <span>Hours</span> <span>H</span>");
        $dataMinutes.html("00 <span>Minutes</span> <span>M</span>");
        $dataSeconds.html("00 <span>Seconds</span> <span>S</span>");
      }
    }, 1000);
  });
  $(".slider-and-tab-section .tab-sidebar ul li").on({
    click: function () {
      var index = $(this).index();
      $(".activities-slider-group li").removeClass("active");
      $(".activities-slider-group li:eq(" + index + ")").addClass("active");
    },
  });
  $(".star-icon").each(function () {
    let self = $(this);
    $(this).on("mouseenter", function () {
      $(this).prevAll().addBack().css("color", "#FBB03B");
    });
    $(this).on("mouseout", function () {
      if (!$(this).parent().attr("data-rating")) {
        $(this).prevAll().addBack().css("color", "#787878");
      } else {
        $(this)
          .siblings()
          .addBack()
          .each(function (index) {
            index + 1 <= $(this).parent().attr("data-rating")
              ? $(this).css("color", "#FBB03B")
              : $(this).css("color", "#787878");
          });
      }
    });
    $(this).on("click", function () {
      $(this)
        .parent()
        .attr("data-rating", $(this).prevAll().length + 1);
    });
  });
  $(function () {
    $('input[name="inOut"]').daterangepicker(
      {
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 2023,
        maxYear: 2025,
        locale: { format: "DD-MMM-YYYY" },
      },
      function (start, end, label) {
        var years = moment().diff(start, "years");
      }
    );
    $('input[name="daterange"]').daterangepicker(
      {
        opens: "left",
        minYear: "2023",
        maxYear: "2025",
        locale: { format: "DD-MMM" },
      },
      function (start, end, label) {
        console.log(
          "A new date selection was made: " +
            start.format("YYYY-MM-DD") +
            " to " +
            end.format("YYYY-MM-DD")
        );
      }
    );
  });
  $('[data-fancybox="popup-video"]').fancybox({
    buttons: ["close"],
    loop: false,
    protect: true,
  });
  $('[data-fancybox="gallery-01"]').fancybox({
    buttons: ["close"],
    loop: false,
    protect: true,
  });
  $(".video1").fancybox({ buttons: ["close"], loop: false, protect: true });
  $(".video2").fancybox({ buttons: ["close"], loop: false, protect: true });
  $(".video3").fancybox({ buttons: ["close"], loop: false, protect: true });
  $(".video4").fancybox({ buttons: ["close"], loop: false, protect: true });
  $(".video5").fancybox({ buttons: ["close"], loop: false, protect: true });
  $(".sidebar-btn2").on("click", function () {
    $(".header-sidebar").addClass("slide");
  });
  $(".close-btn").on("click", function () {
    $(".header-sidebar").removeClass("slide");
  });
  jQuery(".dropdown-icon").on("click", function () {
    jQuery(this).toggleClass("active").next("ul, .mega-menu").slideToggle();
    jQuery(this).parent().siblings().children("ul, .mega-menu").slideUp();
    jQuery(this).parent().siblings().children(".active").removeClass("active");
  });
  jQuery(".dropdown5").on("click", function () {
    jQuery(this)
      .toggleClass("active")
      .next(".checkbox-container ul")
      .slideToggle();
    jQuery(this)
      .parent()
      .siblings()
      .children(".checkbox-container ul")
      .slideUp();
    jQuery(this).parent().siblings().children(".active").removeClass("active");
  });
  window.addEventListener("scroll", function () {
    const header = document.querySelector(
      "header.header-area, .dashboard-sidebar-wrapper"
    );
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  $(document).ready(function() {
    var $breadcrumb = $('#breadcrumb-section');
    var stickyOffset = $breadcrumb.offset().top;

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > stickyOffset) {
            $breadcrumb.addClass('sticky');
        } else {
            $breadcrumb.removeClass('sticky');
        }
    });
});
  $(".counter").counterUp({ delay: 10, time: 1000 });
  var swiper = new Swiper(".home1-banner-slider", {
    slidesPerView: 1,
    speed: 2500,
    spaceBetween: 25,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: { delay: 3000, disableOnInteraction: false },
    navigation: { nextEl: ".home1-banner-next", prevEl: ".home1-banner-prev" },
  });
  var swiper = new Swiper(".home3-banner-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    effect: "fade",
    loop: true,
    fadeEffect: { crossFade: true },
    autoplay: { delay: 2500, disableOnInteraction: false },
    pagination: { el: ".progress-pagination", type: "progressbar" },
    navigation: { nextEl: ".home3-banner-next", prevEl: ".home3-banner-prev" },
  });
  var swiper = new Swiper(".home4-banner-img-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    effect: "fade",
    loop: true,
    fadeEffect: { crossFade: true },
    autoplay: { delay: 2500, disableOnInteraction: false },
    navigation: { nextEl: ".home4-banner-next", prevEl: ".home4-banner-prev" },
  });
  var swiper = new Swiper(".franctional-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    loop: true,
    pagination: { el: ".franctional-slider-pagi1", type: "fraction" },
    navigation: {
      nextEl: ".franctional-slider-next-btn",
      prevEl: ".franctional-slider-prev-btn",
    },
  });
  var swiper = new Swiper(".package-card-tab-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    loop: true,
    autoplay: { delay: 2500, disableOnInteraction: false },
    navigation: {
      nextEl: ".package-card-tab-next",
      prevEl: ".package-card-tab-prev",
    },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 1, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      1400: { slidesPerView: 3 },
    },
  });
  var swiper = new Swiper(".testimonial-card-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    loop: true,
    autoplay: { delay: 2500, disableOnInteraction: false },
    navigation: {
      nextEl: ".testimonial-card-tab-next",
      prevEl: ".testimonial-card-tab-prev",
    },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 1, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 2, spaceBetween: 15 },
      1200: { slidesPerView: 2, spaceBetween: 15 },
      1400: { slidesPerView: 2 },
    },
  });
  var swiper = new Swiper(".testimonial-card-slider-cruise-offers", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    loop: true,
    autoplay: { delay: 2500, disableOnInteraction: false },
    navigation: {
      nextEl: ".testimonial-card-tab-next-cruise-offers",
      prevEl: ".testimonial-card-tab-prev-cruise-offers",
    },
    pagination: {
      el: ".swiper-pagination", // Class for the pagination container
      clickable: true,          // Make the dots clickable
    },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 1, spaceBetween: 15 },
      768: { slidesPerView: 1, spaceBetween: 15 },
      992: { slidesPerView: 1, spaceBetween: 15 },
      1200: { slidesPerView: 1, spaceBetween: 15 },
      1400: { slidesPerView: 1 },
    },
});

  var swiper = new Swiper(".testimonial-card-slider-1", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 5,
    navigation: {
      nextEl: ".testimonial-card-tab-next",
      prevEl: ".testimonial-card-tab-prev",
    },
    breakpoints: {
      280: { slidesPerView: 2, spaceBetween: 15 },
      386: { slidesPerView: 2, spaceBetween: 15 },
      576: { slidesPerView: 3, spaceBetween: 15 },
      768: { slidesPerView: 3, spaceBetween: 15 },
      992: { slidesPerView: 5, spaceBetween: 15 },
      1200: { slidesPerView: 8, spaceBetween: 15 },
      1400: { slidesPerView: 9 },
    },
  });
  var swiper = new Swiper(".package-card2-slider-flight-boooking", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    navigation: {
      nextEl: ".package-card2-next-flight-boooking",
      prevEl: ".package-card2-prev-flight-boooking",
    },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 4, spaceBetween: 15 },
      1400: { slidesPerView: 5 },
    },
  });
  var swiper = new Swiper(".package-card2-slider-adv", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    loop: true,
    autoplay: { delay: 2500, disableOnInteraction: false },
    navigation: {
      nextEl: ".package-card2-next-adv",
      prevEl: ".package-card2-prev-adv",
    },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 1, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      1400: { slidesPerView: 4 },
    },
  });
  var swiper = new Swiper(".package-card2-slider-1", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    navigation: {
      nextEl: ".package-card2-next-1",
      prevEl: ".package-card2-prev-1",
    },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 1, spaceBetween: 15 },
      768: { slidesPerView: 1, spaceBetween: 15 },
      992: { slidesPerView: 2, spaceBetween: 15 },
      1200: { slidesPerView: 2, spaceBetween: 15 },
      1400: { slidesPerView: 2 },
    },
  });
  var swiper = new Swiper(".package-card2-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    navigation: {
      nextEl: ".package-card2-next",
      prevEl: ".package-card2-prev",
    },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 1, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      1400: { slidesPerView: 3 },
    },
  });
  var swiper = new Swiper(".destination-card2-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    navigation: {
      nextEl: ".destination-card2-next",
      prevEl: ".destination-card2-prev",
    },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 3, spaceBetween: 15 },
      992: { slidesPerView: 4, spaceBetween: 15 },
      1200: { slidesPerView: 4, spaceBetween: 15 },
      1400: { slidesPerView: 4 },
    },
  });
  var swiper = new Swiper(".destination-sidebar-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    loop: true,
    autoplay: { delay: 2500, disableOnInteraction: false },
    navigation: {
      nextEl: ".destination-sidebar-next",
      prevEl: ".destination-sidebar-prev",
    },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 2, spaceBetween: 15 },
      1200: { slidesPerView: 2, spaceBetween: 15 },
      1400: { slidesPerView: 2 },
    },
  });
  var swiper = new Swiper(".package-card-slider", {
    slidesPerView: 1,
    speed: 2000,
    spaceBetween: 25,
    navigation: {
      nextEl: ".package-card-slider-next",
      prevEl: ".package-card-slider-prev",
    },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 1, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      1400: { slidesPerView: 3 },
    },
  });
  var swiper = new Swiper(".hotel-card-slider", {
    slidesPerView: 1,
    speed: 2000,
    spaceBetween: 25,
    navigation: {
      nextEl: ".package-card-slider-next",
      prevEl: ".package-card-slider-prev",
    },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 1, spaceBetween: 15 },
      768: { slidesPerView: 1, spaceBetween: 24 },
      992: { slidesPerView: 2, spaceBetween: 24 },
      1200: { slidesPerView: 2, spaceBetween: 24 },
      1400: { slidesPerView: 3 },
    },
  });
  var swiper = new Swiper(".activities-img-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    effect: "fade",
    loop: true,
    fadeEffect: { crossFade: true },
    autoplay: { delay: 2500, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination5", clickable: true },
  });
  var swiper = new Swiper(".hotel-img-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    effect: "fade",
    loop: true,
    fadeEffect: { crossFade: true },
    autoplay: { delay: 2500, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination5", clickable: true },
  });
  var swiper5 = new Swiper(".banner4-card-slide", {
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
    speed: 1500,
    allowTouchMove: false,
    effect: "fade",
    fadeEffect: { crossFade: true },
    thumbs: { swiper: swiper6 },
  });
  var swiper6 = new Swiper(".package-card3-slide", {
    spaceBetween: 10,
    speed: 1500,
    draggable: false,
    navigation: {
      nextEl: ".banner4-slider-next",
      prevEl: ".banner4-slider-prev",
    },
    thumbs: { swiper: swiper5 },
  });
  var swiper = new Swiper(".home2-testimonial-card-slider", {
    slidesPerView: 1,
    speed: 2500,
    spaceBetween: 25,
    loop: true,
    navigation: {
      nextEl: ".testimonial-card-slider-next",
      prevEl: ".testimonial-card-slider-prev",
    },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 1, spaceBetween: 15 },
      768: { slidesPerView: 1, spaceBetween: 15 },
      992: { slidesPerView: 1, spaceBetween: 15 },
      1200: { slidesPerView: 1, spaceBetween: 15 },
      1400: { slidesPerView: 1 },
    },
  });
  var swiper = new Swiper(".teams-card-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    navigation: { nextEl: ".teams-card-next", prevEl: ".teams-card-prev" },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 4, spaceBetween: 15 },
      1400: { slidesPerView: 4 },
    },
  });
  var swiper = new Swiper(".banner5-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    loop: true,
    navigation: {
      nextEl: ".banner5-slider-next",
      prevEl: ".banner5-slider-prev",
    },
  });
  var activities = new Swiper(".activities-tab-img-slider", {
    slidesPerView: 1,
    speed: 2000,
    spaceBetween: 0,
    autoplay: { delay: 2500, disableOnInteraction: false },
    navigation: {
      nextEl: ".activities-tab-img-next",
      prevEl: ".activities-tab-img-prev",
    },
  });
  var activities = new Swiper(".tour-tab-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 30,
    navigation: {
      nextEl: ".tour-tab-slider-next",
      prevEl: ".tour-tab-slider-prev",
    },
    breakpoints: {
      280: { slidesPerView: 2, spaceBetween: 15 },
      386: { slidesPerView: 2, spaceBetween: 15 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 3, spaceBetween: 15 },
      992: { slidesPerView: 4, spaceBetween: 15 },
      1200: { slidesPerView: 5, spaceBetween: 15 },
      1400: { slidesPerView: 5 },
    },
  });
  var activities = new Swiper(".tour-tab-slider.tour-tab-slider-new-banner-tab", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 5,
    navigation: {
      nextEl: ".tour-tab-slider-next.tour-tab-slider-new-banner-tab",
      prevEl: ".tour-tab-slider-prev.tour-tab-slider-new-banner-tab",
    },
    breakpoints: {
      280: { slidesPerView: 2, spaceBetween: 15 },
      386: { slidesPerView: 2, spaceBetween: 15 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 3, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 4, spaceBetween: 15 },
      1400: { slidesPerView: 4 },
    },
  });
  var swiper = new Swiper(".home3-testimonial-card-slider", {
    slidesPerView: 1,
    speed: 2500,
    spaceBetween: 25,
    autoplay: { delay: 2500, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination5", clickable: true },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 1, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 2, spaceBetween: 15 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      1400: { slidesPerView: 3 },
    },
  });
  var swiper = new Swiper(".instagram-slider", {
    slidesPerView: 1,
    speed: 2500,
    spaceBetween: 2,
    autoplay: { delay: 2500, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination5", clickable: true },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3, spaceBetween: 15 },
      992: { slidesPerView: 4 },
      1200: { slidesPerView: 5 },
      1400: { slidesPerView: 5 },
    },
  });
  var swiper = new Swiper(".home4-destination-card-slider", {
    slidesPerView: 1,
    speed: 2000,
    spaceBetween: 25,
    navigation: {
      nextEl: ".home4-destination-card-next",
      prevEl: ".home4-destination-card-prev",
    },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 1, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      1400: { slidesPerView: 3 },
    },
  });
  var swiper = new Swiper(".home4-banner2-slider", {
    slidesPerView: 1,
    speed: 2000,
    spaceBetween: 25,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: { delay: 2500, disableOnInteraction: false },
    navigation: {
      nextEl: ".home4-banner2-slider-next",
      prevEl: ".home4-banner2-slider-prev",
    },
  });
  var swiper = new Swiper(".home4-tab-with-img-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    effect: "fade",
    loop: true,
    fadeEffect: { crossFade: true },
    autoplay: { delay: 2000, disableOnInteraction: false },
    navigation: {
      nextEl: ".home4-tab-with-img-next",
      prevEl: ".home4-tab-with-img-prev",
    },
  });
  var swiper = new Swiper(".package-card-slider2", {
    slidesPerView: 1,
    speed: 2000,
    spaceBetween: 25,
    navigation: {
      nextEl: ".package-card-slider2-next",
      prevEl: ".package-card-slider2-prev",
    },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 1, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      1400: { slidesPerView: 3 },
    },
  });
  var swiper = new Swiper(".package-card4-slider", {
    slidesPerView: 1,
    speed: 2000,
    spaceBetween: 25,
    navigation: {
      nextEl: ".package-card4-slider-next",
      prevEl: ".package-card4-slider-prev",
    },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 1, spaceBetween: 15 },
      768: { slidesPerView: 1, spaceBetween: 15 },
      992: { slidesPerView: 2, spaceBetween: 15 },
      1200: { slidesPerView: 2, spaceBetween: 15 },
      1400: { slidesPerView: 2 },
    },
  });
  var swiper = new Swiper(".home4-testimonial-card-slider", {
    slidesPerView: 1,
    speed: 2500,
    spaceBetween: 25,
    navigation: {
      nextEl: ".home4-testimonial-card-slider-next",
      prevEl: ".home4-testimonial-card-slider-prev",
    },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 1, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 2, spaceBetween: 15 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      1400: { slidesPerView: 3 },
    },
  });
  var swiper = new Swiper(".home5-banner-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: { delay: 2500, disableOnInteraction: false },
    navigation: { nextEl: ".home5-banner-next", prevEl: ".home5-banner-prev" },
  });
  var swiper = new Swiper(".activity-card-slider", {
    slidesPerView: 1,
    speed: 2000,
    spaceBetween: 25,
    navigation: {
      nextEl: ".activity-card-slider-next",
      prevEl: ".activity-card-slider-prev",
    },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 4, spaceBetween: 15 },
      1400: { slidesPerView: 4 },
    },
  });
  var swiper = new Swiper(".destination-card3-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    navigation: {
      nextEl: ".destination-card3-slider-next",
      prevEl: ".destination-card3-slider-prev",
    },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 3, spaceBetween: 15 },
      992: { slidesPerView: 4, spaceBetween: 15 },
      1200: { slidesPerView: 4, spaceBetween: 15 },
      1400: { slidesPerView: 4 },
    },
  });
  var swiper = new Swiper(".home5-banner2-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: { delay: 2500, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination5", clickable: true },
  });
  var swiper = new Swiper(".home5-teams-card-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    pagination: { el: ".teams-pagination", clickable: true },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      1400: { slidesPerView: 3 },
    },
  });
  var swiper = new Swiper(".home5-teams-card-slider-1", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    pagination: { el: ".teams-pagination", clickable: true },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      1400: { slidesPerView: 4 },
    },
  });
  var swiper = new Swiper(".home5-teams-card-slider-2", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    pagination: { el: ".teams-pagination-1", clickable: true },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      1400: { slidesPerView: 4 },
    },
  });
  var swiper = new Swiper(".home5-teams-card-slider-3", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    pagination: { el: ".teams-pagination-2", clickable: true },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      1400: { slidesPerView: 4 },
    },
  });
  var swiper = new Swiper(".home5-teams-card-slider-4", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    pagination: { el: ".teams-pagination-3", clickable: true },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      1400: { slidesPerView: 4 },
    },
  });
  var swiper = new Swiper(".home5-teams-card-slider-5", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    pagination: { el: ".teams-pagination-4", clickable: true },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      1400: { slidesPerView: 4 },
    },
  });
  var swiper = new Swiper(".home5-teams-card-slider-6", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    pagination: { el: ".teams-pagination-5", clickable: true },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      1400: { slidesPerView: 4 },
    },
  });

  /************Event js section start here*****************/
  $(function(){
    $('.event-video-img').hover(function(){
      // on mouse enter
      var $img = $(this).find('img.card-img-top');
      var customdata = $img.parent().attr('href');
      $img.attr('src', customdata); 
    }, function(){
      // on mouse leave
      var $img = $(this).find('img.card-img-top');
      $img.attr('src', $img.attr('data-orig'));
    });
  });
  var swiper = new Swiper(".home5-teams-card-slider-event", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    pagination: { el: ".teams-pagination-event", clickable: true },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 2, spaceBetween: 15 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      1400: { slidesPerView: 4 },
    },
  });
  var swiper = new Swiper(".home5-teams-card-slider-event-events1", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    pagination: { el: ".teams-pagination-event", clickable: true },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 2, spaceBetween: 15 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      1400: { slidesPerView: 3 },
    },
  });
  var swiper = new Swiper(".home5-teams-card-slider-event-1", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    pagination: { el: ".teams-pagination-event-1", clickable: true },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      1400: { slidesPerView: 4 },
    },
  });
  var swiper = new Swiper(".home5-teams-card-slider-event-2", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    pagination: { el: ".teams-pagination-event-2", clickable: true },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      1400: { slidesPerView: 4 },
    },
  });
  var swiper = new Swiper(".home5-teams-card-slider-event-3", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    pagination: { el: ".teams-pagination-event-3", clickable: true },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      1400: { slidesPerView: 4 },
    },
  });
  var swiper = new Swiper(".home5-teams-card-slider-event-4", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    pagination: { el: ".teams-pagination-event-4", clickable: true },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      1400: { slidesPerView: 4 },
    },
  });
  var swiper = new Swiper(".home5-teams-card-slider-event-5", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    pagination: { el: ".teams-pagination-event-5", clickable: true },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      1400: { slidesPerView: 4 },
    },
  });
  var swiper = new Swiper(".home5-teams-card-slider-cruise-list", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    pagination: { el: ".teams-pagination-cruise-list", clickable: true },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
      1400: { slidesPerView: 4 },
    },
  });
  // var swiper = new Swiper(".home5-teams-card-slider-cruise-list-1", {
  //   slidesPerView: 1,
  //   speed: 1500,
  //   spaceBetween: 25,
  //   pagination: { el: ".teams-pagination-cruise-list-1", clickable: true },
  //   breakpoints: {
  //     280: { slidesPerView: 1 },
  //     386: { slidesPerView: 1 },
  //     576: { slidesPerView: 2, spaceBetween: 15 },
  //     768: { slidesPerView: 2, spaceBetween: 15 },
  //     992: { slidesPerView: 3, spaceBetween: 15 },
  //     1200: { slidesPerView: 3, spaceBetween: 15 },
  //     1400: { slidesPerView: 4 },
  //   },
  // });
  
  var swiper = new Swiper(".home5-testimonal-slider", {
    slidesPerView: 1,
    speed: 2500,
    spaceBetween: 25,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: { delay: 2500, disableOnInteraction: false },
    navigation: {
      nextEl: ".home5-testimonal-slider-next",
      prevEl: ".home5-testimonal-slider-prev",
    },
  });
  var swiper = new Swiper(".home6-banner-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 30,
    navigation: {
      nextEl: ".home6-banner-slider-next",
      prevEl: ".home6-banner-slider-prev",
    },
    pagination: { el: ".franctional-slider-pagi1", type: "fraction" },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 4, spaceBetween: 15 },
      1400: { slidesPerView: 4 },
    },
  });
  var swiper = new Swiper(".home6-destination-card-slider", {
    slidesPerView: 1,
    speed: 2000,
    spaceBetween: 15,
    navigation: {
      nextEl: ".activity-card-slider-next",
      prevEl: ".activity-card-slider-prev",
    },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 4, spaceBetween: 15 },
      1400: { slidesPerView: 4 },
      1700: { slidesPerView: 5 },
    },
  });
  var swiper = new Swiper(".home6-package-card-slider", {
    slidesPerView: 1,
    speed: 2000,
    spaceBetween: 20,
    autoplay: { delay: 2500, disableOnInteraction: false },
    navigation: {
      nextEl: ".home6-package-card-next",
      prevEl: ".home6-package-card-prev",
    },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 1 },
      576: { slidesPerView: 1, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 4, spaceBetween: 15 },
      1400: { slidesPerView: 4 },
    },
  });
  var swiper = new Swiper(".home6-testimonial-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: { delay: 2500, disableOnInteraction: false },
    navigation: {
      nextEl: ".home6-testimonial-next",
      prevEl: ".home6-testimonial-prev",
    },
  });
  var activities = new Swiper(".activities-nav-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 0,
    navigation: {
      nextEl: ".home6-activities-nav-next",
      prevEl: ".home6-activities-nav-prev",
    },
    breakpoints: {
      280: { slidesPerView: 1 },
      386: { slidesPerView: 2, spaceBetween: 15 },
      576: { slidesPerView: 3, spaceBetween: 15 },
      768: { slidesPerView: 3, spaceBetween: 15 },
      992: { slidesPerView: 4, spaceBetween: 15 },
      1200: { slidesPerView: 5, spaceBetween: 15 },
      1400: { slidesPerView: 5 },
    },
  });
  $(document).ready(function(){
  $(".filter-button").click(function(){
    var value = $(this).attr('data-filter');

    if(value == "all"){
      $('.filter').hide().slice(0, 8).show('1000');
    } else {
      $(".filter").hide('3000');
      $('.' + value).slice(0, 8).show('3000');
    }

    $('.filter-button').removeClass('active');
    $(this).addClass('active');
    updateViewMoreLink(value);
  });

  function updateViewMoreLink(filter) {
    var baseUrl = "https://example.com/view-more/";
    $("#view-more-link").attr("href", baseUrl + filter);
  }

  $('.filter-button[data-filter="all"]').click();
});
  
  const sliders = document.querySelectorAll(".product-img-slider");
  sliders.forEach((slider) => {
    const nextBtn = slider.parentElement.querySelector(".product-stand-next");
    const prevBtn = slider.parentElement.querySelector(".product-stand-prev");
    const swiper = new Swiper(slider, {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 10,
      loop: true,
      autoplay: false,
      navigation: { nextEl: nextBtn, prevEl: prevBtn },
    });
    nextBtn.addEventListener("click", () => {
      swiper.slideNext();
    });
    prevBtn.addEventListener("click", () => {
      swiper.slidePrev();
    });
  });
  $(".country-area ul li:first-child").addClass("active");
  $(".country-area").on("mouseleave", function () {
    $(".country-area ul li:not(:first-child)").removeClass("active");
    $(".country-area ul li:first-child").addClass("active");
  });
  $(".country-area ul li").on({
    mouseenter: function () {
      $(this).addClass("active").siblings().removeClass("active");
    },
  });
  $(".quantity__minus").on("click", function (e) {
    e.preventDefault();
    var input = $(this).siblings(".quantity__input");
    var value = parseInt(input.val());
    if (value > 1) {
      value--;
    }
    input.val(value.toString().padStart(2, "0"));
  });
  
$(".quantity__plus").on("click", function (e) {
    e.preventDefault();
    var input = $(this).siblings(".quantity__input");
    var value = parseInt(input.val());
    value++;
    input.val(value.toString().padStart(2, "0"));
  });

$(".guest-quantity__minus").on("click", function (e) {
    let type = $(this).data("type");
    e.preventDefault();
    var input = $(this).siblings(".quantity__input");
    var value = parseInt(input.val());
    if (type == "adult") {
      if (value > 1) {
        value--;
        $("#adult-qty").text(value.toString());
      }
    } else if (type == "child") {
      if (value > 0) {
        value--;
        $("#child-qty").text(value.toString());
      }
    } else if (type == "room") {
      if (value > 1) {
        value--;
        $("#room-qty").text(value.toString());
      }
    }
    input.val(value == 0 ? value : value.toString());
  });
  $("#class-type-select").on("change", function () {
    let selectedClass = $(this).val();
    $("#class-type").text(selectedClass);
});

$(".guest-quantity__plus").on("click", function (e) {
    e.preventDefault();
    let type = $(this).data("type");
    var input = $(this).siblings(".quantity__input");
    var value = parseInt(input.val());
    value++;
    if (type == "adult") {
      $("#adult-qty").text(value.toString());
    } else if (type == "child") {
      $("#child-qty").text(value.toString());
    } else if (type == "room") {
      $("#room-qty").text(value.toString());
    }
    input.val(value.toString());
  });

  $(document).ready(function () {
    $(".qty-btn").on("click", function (e) {
      e.stopPropagation();
      $(this).next(".quantity-area").toggleClass("active");
      $(".quantity-area")
        .not($(this).next(".quantity-area"))
        .removeClass("active");
    });
    $(document).on("click", function (e) {
      if (!$(e.target).closest(".quantity-area").length) {
        $(".quantity-area").removeClass("active");
      }
    });
  });
  document
    .querySelector(".sidebar-button")
    .addEventListener("click", () =>
      document.querySelector(".main-menu").classList.toggle("show-menu")
    );
  $(".menu-close-btn").on("click", function () {
    $(".main-menu").removeClass("show-menu");
  });
  $(".right-sidebar-button").on("click", function () {
    $(".right-sidebar-menu").addClass("show-right-menu");
  });
  $(".right-sidebar-close-btn").on("click", function () {
    $(".right-sidebar-menu").removeClass("show-right-menu");
  });
  /*******************filter slide bottom to top js ******************/
  $(".filter-button").on("click", function () {
    $(".filter-sidebar-menu").addClass("show-bottom-menu");
  });
  $(".right-sidebar-close-btn").on("click", function () {
      $(".filter-sidebar-menu").removeClass("show-bottom-menu");
  });

  $(".select-input").on("click", function () {
    $(".custom-select-wrap").toggleClass("active");
  });
  $(document).on("click", ".destination-dropdown-icon", function (e) {
    e.stopPropagation();
    $(this).next(".destination-wrap").toggleClass("active");
    $(this)
      .parents(".destination-column")
      .siblings()
      .children(".destination-dropdown-card")
      .children(".destination-wrap")
      .removeClass("active");
  });
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".destination-wrap").length) {
      $(".destination-wrap").removeClass("active");
    }
  });
  $(".searchbox-input").each(function () {
    var $container = $(this);
    $container.find(".option-list li").on("click", function () {
      var destinationText = $(this).find(".destination h6, h6").text();
      $container.find(".select-input input").val(destinationText);
      $container.find(".custom-select-wrap").removeClass("active");
    });
    $(document).on("click", function (event) {
      if (!$(event.target).closest($container).length) {
        $container.find(".custom-select-wrap").removeClass("active");
      }
    });
    $container
      .find(".custom-select-search-area input")
      .on("input", function () {
        var searchText = $(this).val().toLowerCase();
        $container.find(".option-list li").each(function () {
          var destinationText = $(this)
            .find(".destination h6")
            .text()
            .toLowerCase();
          if (destinationText.includes(searchText)) {
            $(this).show();
          } else {
            $(this).hide();
          }
        });
      });
  });
//   $(".deatination_drop").select2({ closeOnSelect: true, width: "resolve" });
//   const element = document.querySelectorAll(".badge__char");
//   const step = 360 / element.length;
//   element.forEach((elem, i) => {
//     elem.style.setProperty("--char-rotate", i * step + "deg");
//   });
//   const foo = 360 / 7;
//   for (let i = 0; i <= 7; i++) {
//     console.log(i * foo + "deg");
//   }
  $(".location-area").each(function () {
    var dealName = $(this).children(".location-list");
    if (dealName.width() >= $(this).width()) {
      dealName.addClass("scrollTextAni");
    }
  });
  $(function () {
    $(".choose-payment-method ul li").on("click", function () {
      $(".choose-payment-method ul li").removeClass("active");
      if ($(this).hasClass("stripe")) {
        $("#StripePayment").show();
        $("#OfflinePayment").hide();
        $(this).addClass("active");
      } else if ($(this).hasClass("paypal")) {
        $("#OfflinePayment").hide();
        $("#StripePayment").hide();
        $(this).addClass("active");
      } else if ($(this).hasClass("offline")) {
        $("#OfflinePayment").show();
        $("#StripePayment").hide();
        $(this).addClass("active");
      } else {
        $("#StripePayment").hide();
        $("#OfflinePayment").hide();
      }
    });
  });
  $("select").niceSelect();
  jQuery(document).ready(function ($) {
    $(".lists").on("click", function (event) {
      event.preventDefault();
      $(".list-grid-product-wrap")
        .addClass("list-group-wrapper")
        .removeClass("grid-group-wrapper");
    });
    $(".grid").on("click", function (event) {
      event.preventDefault();
      $(".list-grid-product-wrap")
        .removeClass("list-group-wrapper")
        .addClass("grid-group-wrapper");
    });
  });
  $(".grid-view li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
    let startedFromIndexPage = false;

    // Function to initialize fancybox
    function initializeFancybox() {
        $('[data-fancybox]').fancybox({
            fullScreen: { autoStart: true },
            buttons: ["slideShow", "share", "close"],
            onSlideShowChange: function(instance, current, active) {
                console.info("SlideShow active? " + active);
                if (active && !startedFromIndexPage) {
                    instance.next();
                }
                startedFromIndexPage = false;
            },
        });
    }

    // Initialize fancybox
    initializeFancybox();

    // Handle click on "StartSlideShowFirstImage"
    $(document).on("click", ".StartSlideShowFirstImage", function () {
        const $roomDetailsArea = $(this).closest('.room-details-area');
        const galleryId = $roomDetailsArea.data('gallery-id');
        
        startedFromIndexPage = true;
        
        // Trigger click on the first hidden image to start the slideshow
        $roomDetailsArea.find(`a[data-fancybox="${galleryId}"]`).first().trigger("click");
        
        $.fancybox.getInstance().SlideShow.toggle();
    });

    // Reinitialize fancybox to include hidden images when any image is clicked
    $(document).on('click', '.gallery-img-wrap a', function() {
        const $roomDetailsArea = $(this).closest('.room-details-area');
        const galleryId = $roomDetailsArea.data('gallery-id');
        
        // Show all hidden images
        $roomDetailsArea.find('.others-image-wrap a').attr('data-fancybox', galleryId);
        
        // Reinitialize fancybox
        initializeFancybox();
    });

  /**********wishlist button add or not *********/
  $(document).ready(function() {
    $('.cutom-wishlist-button').on('click', function() {
        const icon = $(this).find('.fa');
        // Toggle between heart and filled heart icons
        icon.toggleClass('fa-heart fa-heart');
        // Toggle background color
        $(this).toggleClass('filled');
    });
});
$(document).ready(function() {
    // Initially hide all but the first three list items in each list
    $('.facilisis').each(function() {
        $(this).find('li:gt(2)').hide().addClass('hidden');
    });

    $('.see-more-facilities').on('click', function() {
        var $this = $(this);
        var hiddenItems = $this.siblings('li.hidden');
        var facilisis = $this.closest('.facilisis');

        if (hiddenItems.length) {
            hiddenItems.show().removeClass('hidden');
            $this.text('Show Less');
            facilisis.addClass('expanded');
        } else {
            $this.siblings('li:gt(2)').hide().addClass('hidden');
            $this.text('+3');
            facilisis.removeClass('expanded');
        }
    });
});
$(document).ready(function () {
  $('.show-more-btn').on('click', function () {
      var container = $(this).closest('.expandable-container');
      var hiddenItems = container.find('.hidden');

      if (hiddenItems.length) {
          // Show the hidden list items
          hiddenItems.removeClass('hidden');
          $(this).text('Show less');
      } else {
          // Hide the extra list items
          container.find('.single-start-last-section:gt(3)').addClass('hidden');
          $(this).text('Show more');
      }
  });
});

/********888for mobile**********************/
$(document).ready(function () {
  $('#show-more-btn-1').on('click', function () {
      var hiddenItems = $('#checkbox-list.new .hidden');

      if (hiddenItems.length) {
          // Show the hidden list items
          hiddenItems.removeClass('hidden');
          $(this).text('Show less');
      } else {
          // Hide the extra list items
          $('#checkbox-list .single-start-last-section:gt(3)').addClass('hidden');
          $(this).text('Show 4 more');
      }
  });
});
$(document).ready(function() {
  var urls = {
      'flight-tab': 'flight.html',
      'hotel-tab': 'hotel.html',
      'Cruise-tab': 'cruise.html',
      'Events-tab': 'events.html'
  };

  $('.nav-link').on('click', function(event) {
      event.preventDefault(); // Prevent the default action

      var tabId = $(this).attr('id');
      var url = urls[tabId];

      console.log('Navigating to:', url); // Log the URL for debugging
      if (url) {
          window.location.href = url; // Redirect to the URL
      }
  });
});

/**********navbar like sticky tab link for hotel details section js************/
$(document).ready(function() {
  var $navbar = $('#mainNav');
  var navbarHeight = $navbar.outerHeight();
  var $stickySection = $('#page-top'); // Target section for sticky behavior
  var stickySectionTop = $stickySection.offset().top;
  var stickySectionBottom = stickySectionTop + $stickySection.outerHeight();

  // Smooth scrolling
  $('a.nav-link').on('click', function(event) {
      event.preventDefault();
      var target = $(this).attr('href');
      var offset = $navbar.outerHeight();

      $('html, body').animate({
          scrollTop: $(target).offset().top - offset
      }, 1000);

      // Update active state on click
      $('a.nav-link').removeClass('active');
      $(this).addClass('active');
  });

  // Sticky navbar and active link
  $(window).on('scroll', function() {
      var scrollTop = $(window).scrollTop();
      var sections = $('.section');

      // Update sticky behavior based on section visibility
      if (scrollTop >= stickySectionTop - navbarHeight && scrollTop < stickySectionBottom - navbarHeight) {
          $navbar.addClass('custom-fixed-top');
      } else {
          $navbar.removeClass('custom-fixed-top');
      }

      // Update active link based on scroll position==
      sections.each(function() {
          var $section = $(this);
          var sectionTop = $section.offset().top;
          var sectionBottom = sectionTop + $section.outerHeight();

          if (scrollTop >= sectionTop - navbarHeight && scrollTop < sectionBottom - navbarHeight) {
              $('a.nav-link').removeClass('active');
              $('a.nav-link[href="#' + $section.attr('id') + '"]').addClass('active');
              return false; // Stop looping once the section is found
          }
      });

      // Ensure navbar is removed if no section is in view
      if (scrollTop + $(window).height() >= $(document).height()) {
          $navbar.removeClass('custom-fixed-top');
      }
  });

  // Set default active state on page load
  $(window).on('load', function() {
      var firstSection = $('.section').first().attr('id');
      $('a.nav-link[href="#' + firstSection + '"]').addClass('active');
  });
});

//event popup select category increment & Decrement js 
$(document).ready(function() {
  // Function to select category and show counter buttons
  function selectCategory(categoryId) {
      const category = $(`#${categoryId}`);
      const actionBtnDiv = category.find('.action-btn');
      actionBtnDiv.html(`
          <div class="counter-btn">
              <button class="decrease-btn">-</button>
              <span class="count">1</span>
              <button class="increase-btn">+</button>
          </div>
      `);

      // Attach event handlers for increase and decrease
      category.find('.increase-btn').on('click', function() {
          increaseCount(categoryId);
      });

      category.find('.decrease-btn').on('click', function() {
          decreaseCount(categoryId);
      });
  }

  // Function to increase count
  function increaseCount(categoryId) {
      const category = $(`#${categoryId}`);
      const countSpan = category.find('.count');
      let count = parseInt(countSpan.text());
      count += 1;
      countSpan.text(count);
  }

  // Function to decrease count
  function decreaseCount(categoryId) {
      const category = $(`#${categoryId}`);
      const countSpan = category.find('.count');
      let count = parseInt(countSpan.text());

      if (count > 1) {
          count -= 1;
          countSpan.text(count);
      } else {
          // Reset to "Select" button
          const actionBtnDiv = category.find('.action-btn');
          actionBtnDiv.html(`
              <button class="select-btn">Select</button>
          `);

          // Reattach the click event for the "Select" button
          category.find('.select-btn').on('click', function() {
              selectCategory(categoryId);
          });
      }
  }

  // Attach event handler to initial "Select" buttons
  $('.select-btn').on('click', function() {
      const categoryId = $(this).closest('.category-card').attr('id');
      selectCategory(categoryId);
  });
});

/*******custom js for event main page slider and filter section******/
// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  freeMode: true,
});

// Handle filter functionality using jQuery
$(document).ready(function() {
  // By default, show all events
  $('.custom-filter-btn').on('click', function() {
      // Remove active class from all buttons
      $('.custom-filter-btn').removeClass('active');
      // Add active class to the clicked button
      $(this).addClass('active');

      const filterValue = $(this).data('filter');

      // Filter event cards
      $('.custom-card-filter-list').each(function() {
          if (filterValue === 'all') {
              $(this).show(); // Show all
          } else if ($(this).data('category') === filterValue) {
              $(this).show(); // Show matching category
          } else {
              $(this).hide(); // Hide non-matching cards
          }
      });
  });
});

/**********tooltip js start here*********/
// Initialize tooltips
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(tooltipNode => {
  new bootstrap.Tooltip(tooltipNode, {
      html: true, // Allows HTML content in the tooltip
      customClass: 'tooltip-custom' // Apply custom class
  });
});
/**************rangeslider duration for flight js**************/
$(function() {
  function formatDuration(value) {
      var hours = Math.floor(value / 60);
      var minutes = value % 60;
      return hours + 'h ' + minutes + 'm';
  }

  // First Range Slider (Instance 1)
  $("#slider-range-duration").slider({
      range: true,
      min: 0,
      max: 1440, // 24 hours * 60 minutes
      values: [120, 960], // Example values (2h to 16h)
      slide: function(event, ui) {
          $("#slider-range-value1-duration").text(formatDuration(ui.values[0]));
          $("#slider-range-value2-duration").text(formatDuration(ui.values[1]));
          $("#min-value-duration").val(ui.values[0]);
          $("#max-value-duration").val(ui.values[1]);
      }
  });

  $("#slider-range-value1-duration").text(formatDuration($("#slider-range-duration").slider("values", 0)));
  $("#slider-range-value2-duration").text(formatDuration($("#slider-range-duration").slider("values", 1)));

  // Second Range Slider (Instance 2)
  $("#slider-range-duration-2").slider({
      range: true,
      min: 0,
      max: 1440, // 24 hours * 60 minutes
      values: [180, 720], // Example values (3h to 12h)
      slide: function(event, ui) {
          $("#slider-range-value1-duration-2").text(formatDuration(ui.values[0]));
          $("#slider-range-value2-duration-2").text(formatDuration(ui.values[1]));
          $("#min-value-duration-2").val(ui.values[0]);
          $("#max-value-duration-2").val(ui.values[1]);
      }
  });

  $("#slider-range-value1-duration-2").text(formatDuration($("#slider-range-duration-2").slider("values", 0)));
  $("#slider-range-value2-duration-2").text(formatDuration($("#slider-range-duration-2").slider("values", 1)));
});

/****************8range slider for price**************/
$(document).ready(function() {
  $('.price-range-slider').each(function() {
      var $sliderContainer = $(this);
      var sliderId = $sliderContainer.data('slider-id');
      var $minValue = $sliderContainer.find('.min-value-1');
      var $maxValue = $sliderContainer.find('.max-value-1');
      var $sliderRange = $sliderContainer.find('.slider-range-1');
      var $minLabel = $sliderContainer.find('.slider-range-value-min-1');
      var $maxLabel = $sliderContainer.find('.slider-range-value-max-1');

      $sliderRange.slider({
          range: true,
          min: 1000,
          max: 50000,
          values: [1000, 50000],
          slide: function(event, ui) {
              $minValue.val(ui.values[0]);
              $maxValue.val(ui.values[1]);
              $minLabel.text(ui.values[0]);
              $maxLabel.text(ui.values[1]);
          }
      });

      // Set initial values
      $minValue.val($sliderRange.slider("values", 0));
      $maxValue.val($sliderRange.slider("values", 1));
      $minLabel.text($sliderRange.slider("values", 0));
      $maxLabel.text($sliderRange.slider("values", 1));
  });
});


/***************flight hide and show details****************/
var activeLink = null;
$(".view-details").on("click", function() {
    var $this = $(this);
    var target = $($this.data("target"));

    if (activeLink && activeLink[0] !== this) {
        var activeTarget = $(activeLink.data("target"));
        activeTarget.removeClass("show");
        activeLink.find("span").text("View Flight Details");
    }

    if (target.hasClass("show")) {
        target.removeClass("show");
        $this.find("span").text("View Flight Details");
        activeLink = null;
    } else {
        target.addClass("show");
        $this.find("span").text("Close Flight Details");
        activeLink = $this;
    }
});


$(document).ready(function() {
  var swiper = new Swiper(".home5-teams-card-slider-cruise-list-1-1", {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 25,
      pagination: { el: ".teams-pagination-cruise-list-1", clickable: true },
      breakpoints: {
        280: { slidesPerView: 1 },
        386: { slidesPerView: 1 },
        576: { slidesPerView: 1, spaceBetween: 15 },
        768: { slidesPerView: 2, spaceBetween: 15 },
        992: { slidesPerView: 1, spaceBetween: 15 },
        1200: { slidesPerView: 1, spaceBetween: 15 },
        1400: { slidesPerView: 1 },
      },
  })
});


/***************cruise date filter section****************/
$(document).ready(function() {
  var swiper = new Swiper(".home5-teams-card-slider-cruise-list-1", {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 25,
      pagination: { el: ".teams-pagination-cruise-list-1", clickable: true },
      breakpoints: {
        280: { slidesPerView: 1 },
        386: { slidesPerView: 1 },
        576: { slidesPerView: 2, spaceBetween: 15 },
        768: { slidesPerView: 2, spaceBetween: 15 },
        992: { slidesPerView: 3, spaceBetween: 15 },
        1200: { slidesPerView: 3, spaceBetween: 15 },
        1400: { slidesPerView: 4 },
      },
  });

  // Function to update or destroy the Swiper based on visible slides
  function updateSwiper() {
      var visibleSlides = $('.custom-cruise-slider-item:visible').length; // Count visible slides

      if (visibleSlides === 0) {
          swiper.destroy(true, true); // Destroy swiper if no slides are visible
      } else {
          if (!swiper.destroyed) {
              swiper.update(); // If swiper exists, update it to reflect the changes
          }
      }
  }

  // Function to filter slides based on the selected section
  function filterSlidesBySection(selectedSection) {
      // Filter the slides based on the section
      $('.custom-cruise-slider-item').each(function() {
          var slideSection = $(this).data('section').trim(); // Get the section name from data-section attribute

          if (slideSection === selectedSection) {
              $(this).show(); // Show matching slide
          } else {
              $(this).hide(); // Hide non-matching slides
          }
      });

      // After filtering, update the swiper
      updateSwiper();
  }

  // Add change event listener to all radio buttons with the section filter
  $('input[name="time-price-101"]').on('change', function() {
      var selectedSection = $(this).data('section-filter').trim(); // Get the section filter from the radio button
      filterSlidesBySection(selectedSection); // Call the filter function
  });

  // Trigger filter on page load for the initially selected radio button
  var initiallySelectedRadio = $('input[name="time-price-101"]:checked');
  if (initiallySelectedRadio.length > 0) {
      var initialSection = initiallySelectedRadio.data('section-filter').trim();
      filterSlidesBySection(initialSection); // Filter the slides initially
  }
});

/****************read more and less section for cruise booking js****************/
$(document).ready(function() {
  $('#read-more').click(function() {
      const content = $('.additional-content');
      const isVisible = content.is(':visible');

      if (!isVisible) {
          // Show the additional content
          content.slideDown();  // You can use fadeIn() for a different effect
          $(this).text('Read Less');
      } else {
          // Hide the additional content
          content.slideUp();
          $(this).text('Read More');
      }
  });
});


/***************Cruise price hide and show details****************/
var activeLink = null;
$(".view-details-1").on("click", function() {
    var $this = $(this);
    var target = $($this.data("target"));

    if (activeLink && activeLink[0] !== this) {
        var activeTarget = $(activeLink.data("target"));
        activeTarget.removeClass("show");
        activeLink.find("span").text("View Prices");
    }

    if (target.hasClass("show")) {
        target.removeClass("show");
        $this.find("span").text("View Prices");
        activeLink = null;
    } else {
        target.addClass("show");
        $this.find("span").text("Hide Prices");
        activeLink = $this;
    }
});

/***************image transition using js****************/
$(document).ready(function(){
  $('.image-card').hover(
      function() {
          // On mouse enter, hide the previous image and show the hover image
          $(this).find('.previous-image').addClass('hidden');
          $(this).find('.hover-image').removeClass('hidden');
      },
      function() {
          // On mouse leave, show the previous image and hide the hover image
          $(this).find('.previous-image').removeClass('hidden');
          $(this).find('.hover-image').addClass('hidden');
      }
  );
});
/********tour packages result image slider*********/
$(document).ready(function() {
  var swiper = new Swiper('.hotel-img-slider-1', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true, // Enable looping if needed
      pagination: {
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next', // Next button
          prevEl: '.swiper-button-prev', // Previous button
      },
  });
  swiper.slideNext()
});

/************favoutite tour package show text with icon**************/
// Loop over each .favorite-container section to add functionality
$('.favorite-container').each(function() {
  let isFavorited = false;
  let favoriteCount = 0;  // Initial count for each section

  // Find the current love icon and message elements within the scope of each section
  const loveIcon = $(this).find('.love-icon');
  const message = $(this).find('.favorite-message');
  const favCount = $(this).find('.fav-count');

  // Attach a click event to the love icon
  loveIcon.on("click", function() {
      if (!isFavorited) {
          loveIcon.css("color", "red");  // Change the heart color to red
          favoriteCount++;  // Increment the count
          favCount.text(`(${favoriteCount})`);  // Update the count display
          message.fadeIn();  // Show the message
          isFavorited = true;
      } else {
          loveIcon.css("color", "#D4D4D4");  // Change the heart color back to grey
          favoriteCount--;  // Decrement the count
          favCount.text(`(${favoriteCount})`);  // Update the count display
          if (favoriteCount <= 0) {
              message.fadeOut();  // Hide the message if count reaches zero
          }
          isFavorited = false;
      }
  });
});
/********************************signup and login js*****************************/
$(document).ready(function() {
  // Handle Sign Up button click
  $('#go-to-signup').on('click', function(e) {
      e.preventDefault(); // Prevent default anchor behavior
      $('#user-login').modal('hide'); // Hide the login modal
      $('#sign-up-modal').modal('show'); // Show the sign-up modal
  });

  // Handle Login button click
  $('#go-to-login').on('click', function(e) {
      e.preventDefault(); // Prevent default anchor behavior
      $('#sign-up-modal').modal('hide'); // Hide the sign-up modal
      $('#user-login').modal('show'); // Show the login modal
  });
  
  // Handle OTP button click (Example functionality)
  $('#otp-to-login').on('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    $('#user-login').modal('hide'); // Hide the login modal
    $('#otp-modal').modal('show'); // Show the sign-up modal
  });
});
$(document).ready(function() {
  $('.otp-input').on('input', function() {
      // Move to next input if the current input is filled
      if ($(this).val().length >= 1) {
          // Find the next input element
          let nextInput = $(this).next('.otp-input');
          if (nextInput.length) {
              nextInput.focus(); // Focus the next input
          }
      }
  });
});


/***********************add new guest js satrt here******************** */
$(document).ready(function() {
  let guestCounter = 1;

  $('.guest-add-more-start a').click(function(event) {
      event.preventDefault(); // Prevent the default link behavior

      // Clone the existing guest details form
      const $guestDetailsForm = $('.show-more-guest-fields').first().clone();

      // Increment the guest counter
      guestCounter++;

      // Update the heading and guest number
      $guestDetailsForm.find('.form-heading').text(`Guest Details ${guestCounter}`);
      $guestDetailsForm.find('.guest-number').text(`0/${guestCounter} added`);

      // Clear input values in the cloned form
      $guestDetailsForm.find('input').val('');

      // Append the cloned form to the container
      $guestDetailsForm.insertBefore($(this));

      // Scroll to the newly added form
      $('html, body').animate({
          scrollTop: $guestDetailsForm.offset().top
      }, 1000);
  });
});

  const togglePassword4 = document.getElementById("togglePassword4");
  const password4 = document.querySelector("#password4");
  if (togglePassword4) {
    togglePassword4.addEventListener("click", function (e) {
      const type =
        password4.getAttribute("type") === "password" ? "text" : "password";
      password4.setAttribute("type", type);
      this.classList.toggle("bi-eye");
    });
  }
  const togglePassword5 = document.getElementById("togglePassword5");
  const password5 = document.querySelector("#password5");
  if (togglePassword5) {
    togglePassword5.addEventListener("click", function (e) {
      const type =
        password5.getAttribute("type") === "password" ? "text" : "password";
      password5.setAttribute("type", type);
      this.classList.toggle("bi-eye");
    });
  }
  const togglePassword6 = document.getElementById("togglePassword6");
  const password6 = document.querySelector("#password6");
  if (togglePassword6) {
    togglePassword6.addEventListener("click", function (e) {
      const type =
        password6.getAttribute("type") === "password" ? "text" : "password";
      password6.setAttribute("type", type);
      this.classList.toggle("bi-eye");
    });
  }
})(jQuery);
