"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var instances = [];

  if (document.getElementById('ub_table-of-contents-toggle-link')) {
    instances.push(document.getElementById('ub_table-of-contents-toggle-link'));
  } else {
    instances = Array.from(document.getElementsByClassName('ub_table-of-contents-toggle-link'));
  }

  instances.forEach(function (instance) {
    var tocHeight = 0;
    var block = instance.closest('.ub_table-of-contents');
    var tocContainer = block.querySelector('.ub_table-of-contents-container');
    var showButton = block.getAttribute('data-showtext') || 'show';
    var hideButton = block.getAttribute('data-hidetext') || 'hide';
    var initialHide = tocContainer.style.height === '0px' || tocContainer.classList.contains('ub-hide') || getComputedStyle(tocContainer).display === 'none';

    if (initialHide) {
      tocContainer.classList.remove('ub-hide');
      tocContainer.style.display = '';
      tocContainer.style.height = '';
    }

    tocHeight = tocContainer.offsetHeight;

    if (initialHide) {
      tocContainer.classList.add('ub-hide');
    }

    tocContainer.removeAttribute('style');
    instance.addEventListener('click', function (event) {
      event.preventDefault();

      if (tocContainer.classList.contains('ub-hide')) {
        tocContainer.classList.remove('ub-hide');
        tocContainer.classList.add('ub-hiding');
      } else {
        if (tocHeight !== tocContainer.offsetHeight) {
          tocHeight = tocContainer.offsetHeight;
        }

        tocContainer.style.height = "".concat(tocHeight, "px");
      }

      setTimeout(function () {
        //delay is needed for the animation to run properly
        if (tocContainer.classList.contains('ub-hiding')) {
          tocContainer.classList.remove('ub-hiding');
          tocContainer.style.height = "".concat(tocHeight, "px");
        } else {
          tocContainer.classList.add('ub-hiding');
          tocContainer.style.height = '';
        }
      }, 20);
      instance.innerHTML = tocContainer.classList.contains('ub-hiding') ? hideButton : showButton;
    });
    tocContainer.addEventListener('transitionend', function () {
      if (getComputedStyle(tocContainer).height === '0px') {
        tocContainer.classList.remove('ub-hiding');
        tocContainer.classList.add('ub-hide');

        if (tocContainer.style.display === 'block') {
          tocContainer.style.display = '';
        }
      } else {
        tocContainer.style.height = '';
      }
    });
  });
});