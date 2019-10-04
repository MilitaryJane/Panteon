(function () {

  "use strict";

  var lifeOrgList = document.querySelector('.life-organization__list');
  var lifeOrgButtons = document.querySelectorAll('.life-organization__item-button');
  lifeOrgButtons = Array.prototype.slice.call(lifeOrgButtons);
  var lifeOrgItems = document.querySelectorAll('.life-organization__item');
  lifeOrgItems = Array.prototype.slice.call(lifeOrgItems);

  lifeOrgList.classList.remove('life-organization__list--no-js');

  var openElem = document.querySelector('.life-organization__item--open').querySelector('.life-organization__item-wrapper');
  window.checkHeight(lifeOrgList, openElem);

  lifeOrgButtons.forEach(function(element){
    element.addEventListener('click', function (evt) {
      evt.preventDefault();

      lifeOrgItems.forEach(function(element){
        element.classList.remove('life-organization__item--open');
      });

      var lifeOrgItemShow = this.parentNode;
      lifeOrgItemShow.classList.add('life-organization__item--open');

      window.checkHeight(lifeOrgList, lifeOrgItemShow.querySelector('.life-organization__item-wrapper'));

      if (document.documentElement.clientWidth >= 765 && document.documentElement.clientWidth  < 1600) {
        var showBlock = lifeOrgItemShow.querySelector('.life-organization__item-wrapper');
        var currentPosition = showBlock.getBoundingClientRect();

        var page = document.querySelector('.page');
        const CONTAINER_MARGIN = 23;
        const BLOCK_MARGIN = 20;

        var delta = page.getBoundingClientRect().left - currentPosition.left + CONTAINER_MARGIN + BLOCK_MARGIN + 'px';

        if (delta != BLOCK_MARGIN + 'px') {

        showBlock.style.marginLeft = delta;
        }
      }
    });
  })
})();
