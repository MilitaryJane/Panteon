(function () {

    "use strict";

    var featuresList = document.querySelector('.features__list');
    var buttons = document.querySelectorAll('.features__question');
    buttons = Array.prototype.slice.call(buttons);



    featuresList.classList.remove('features__list--no-js');


    buttons.forEach(function(element){
      element.addEventListener('click', function (evt) {
        evt.preventDefault();
        var buttonTicks = evt.target.querySelectorAll('.features__tick');
        buttonTicks = Array.prototype.slice.call(buttonTicks);
        buttonTicks.forEach(function(element) {
          (element.classList.contains('features__tick--open') === true) ? element.classList
              .remove(
                'features__tick--open'): element.classList.add('features__tick--open');
          });

        var answerBlock = evt.target.parentNode.querySelector('.features__answer');
        (answerBlock.classList.contains('features__answer--open') === true) ? answerBlock
            .classList
            .remove(
                'features__answer--open'): answerBlock.classList.add('features__answer--open');


    });
  })

})();
