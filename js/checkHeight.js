(function () {

  "use strict";

  window.checkHeight = function(elem1, elem2) {

    elem1.style.height = elem1.style.minHeight;

    if (document.documentElement.clientWidth >= 765) {
      if(elem2.getBoundingClientRect().height >= elem1.getBoundingClientRect().height) {
        elem1.style.height = elem2.getBoundingClientRect().height + 'px';
      }
    }
  }
})();


