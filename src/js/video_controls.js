(function () {
  'use strict'

  var playButtons = document.querySelectorAll('.video__play-button');
  playButtons = Array.prototype.slice.call(playButtons);

  playButtons.forEach(function(element) {
    element.addEventListener('click', function(evt) {
      evt.preventDefault();

      this.parentNode.classList.add('video__image-wrapper--close');

      var video = this.parentNode.nextElementSibling
      video.classList.add('video__video-content--open');
      video.play();

      video.addEventListener('click', function() {
        video.pause();
        this.previousElementSibling.classList.remove('video__image-wrapper--close');
        this.classList.remove('video__video-content--open');
      });
    });
  })
})();
