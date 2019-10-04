(function () {

    "use strict";

    var mainNav = document.querySelector(".main-nav");
    var toggle = document.querySelector(".toggle");
    var modalSiteMenu = document.querySelector(".site-list");

    mainNav.classList.remove("main-nav--no-js");

    toggle.addEventListener("click", function (evt) {
        evt.preventDefault();
        (modalSiteMenu.classList.contains("site-list--open") === true) ? modalSiteMenu
            .classList
            .remove(
                "site-list--open"): modalSiteMenu.classList.add("site-list--open");
    });

})();
