(function () {

  "use strict";
  var featuresList = document.querySelector('.features__list');
  var buttons = document.querySelectorAll('.features__question');
  buttons = Array.prototype.slice.call(buttons);
  var featuresItems = document.querySelectorAll('.features__item');
  featuresItems = Array.prototype.slice.call(featuresItems);


  featuresList.classList.remove('features__list--no-js');

  var openElem = document.querySelector('.features__item--open').querySelector('.features__answer');
  window.checkHeight(featuresList, openElem);

  buttons.forEach(function(element){
    element.addEventListener('click', function (evt) {
      evt.preventDefault();

      if (document.documentElement.clientWidth >= 765) {
        featuresItems.forEach(function(element) {
          element.classList.remove('features__item--open');
        })
      }

      var featuresItemShow = evt.target.parentNode;

      (featuresItemShow.classList.contains('features__item--open') === true) ? featuresItemShow
      .classList
      .remove('features__item--open') : featuresItemShow.classList.add('features__item--open');

      window.checkHeight(featuresList, featuresItemShow.querySelector('.features__answer'));

    });
  })
})();
