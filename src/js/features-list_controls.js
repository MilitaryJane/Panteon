(function () {

  "use strict";

  var featuresList = document.querySelector('.features__list');
  var buttons = document.querySelectorAll('.features__question');
  buttons = Array.prototype.slice.call(buttons);
  var featuresItems = document.querySelectorAll('.features__item');
  featuresItems = Array.prototype.slice.call(featuresItems);



  featuresList.classList.remove('features__list--no-js');


  buttons.forEach(function(element){
    element.addEventListener('click', function (evt) {
      evt.preventDefault();

      if (document.documentElement.clientWidth >= 765) {
        featuresItems.forEach(function(element) {
          element.classList.remove('features__item--open');
        })
      }

      var answerBlock = evt.target.parentNode;
      (answerBlock.classList.contains('features__item--open') === true) ? answerBlock
      .classList
      .remove('features__item--open'): answerBlock.classList.add('features__item--open');
    });
  })
})();
