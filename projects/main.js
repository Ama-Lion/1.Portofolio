jQuery(document).ready(() => {
  const $catsfilter = $(".cats-filter");
  $catsfilter.find("a").click(function () {
    $(this).parent().parent().find("a").removeClass("current");
    $(this).addClass("current");
  });

  const $plist = $("#portifolio-list");
  const $pfilter = $("#portifolio-filter");

  $plist.isotope({
    filter: "*",
    layoutMode: "masonry",
    animationOptions: {
      duration: 750,
      easing: "linear",
    },
  });

  $pfilter.find("a").click(function () {
    const selector = $(this).attr("data-filter");
    $plist.isotope({
      filter: selector,
      layoutMode: "masonry",
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });

    return false;
  });
});
