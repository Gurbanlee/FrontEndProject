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
        items: 3,
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
  // OWLCAROUSEL END

  let dropDown = $(".fh-dropdown");
  $(dropDown).click(function (e) {
    $(this).find("div").removeClass("d-none");
  });
});
