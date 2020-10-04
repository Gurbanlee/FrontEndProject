$(document).ready(function () {
  // OWLCAROUSEL START
  $(".owl-one").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".owl-two").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
        loop: false,
      },
    },
  });

  $(".owl-four").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 4,
      },
    },
  });
  // OWLCAROUSEL END

  $(".fh-dropdown").click(function () {
    $(".fh-dpd").removeClass("d-none");
  });

  $("#hide-dropdown").click(function () {
    $(".fh-dpd").addClass("d-none");
  });

  $("#top").click(function () {
    $("body").animate({ scrollTop: 50 }, "slow");
    return false;
  });
});