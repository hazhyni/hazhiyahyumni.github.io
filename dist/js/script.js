// $(document).ready(function () {
//   $("#user-menu-button").click(function () {
//     $("#moreSection").toggle();
//   });
// });

// $(document).ready(function () {
//   $("#mobileMenuButton").on("click", function () {
//     var menu = $("#mobile-menu");
//     if (menu.hasClass("hidden")) {
//       menu.removeClass("hidden");
//     } else {
//       menu.addClass("hidden");
//     }
//   });
// });

$(document).ready(function () {
  var mobileMenuButton = $('button[type="button"]');
  var mobileMenu = $(".hidden.lg\\:hidden");
  var backdrop = $(".fixed.inset-0.z-50");

  mobileMenuButton.on("click", function () {
    mobileMenu.toggleClass("hidden");
    backdrop.toggleClass("hidden");
  });

  backdrop.on("click", function () {
    mobileMenu.addClass("hidden");
    backdrop.addClass("hidden");
  });
});
