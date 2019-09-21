(function () {

    "use strict";

    var featuresList = document.querySelector('.features__list');
    var button = document.querySelectorAll('.features__question');
    button = Array.prototype.slice.call(button);



    featuresList.classList.remove('features__list--no-js');


    button.forEach(function(element){

      element.addEventListener('click', function (evt) {
        evt.preventDefault();
        var buttonTick = evt.target.querySelector('.features__tick');
        (buttonTick.classList.contains('features__tick--open') === true) ? buttonTick.classList
            .remove(
              'features__tick--open'): buttonTick.classList.add('features__tick--open');

        var answerBlock = evt.target.parentNode.querySelector('.features__answer');
        (answerBlock.classList.contains('features__answer--open') === true) ? answerBlock
            .classList
            .remove(
                'features__answer--open'): answerBlock.classList.add('features__answer--open');
    });
  })

})();
