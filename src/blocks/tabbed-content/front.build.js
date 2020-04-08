"use strict";

/* eslint-disable */
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;

    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);

    return null;
  };
}

function ub_getSiblings(element, criteria) {
  var children = Array.prototype.slice.call(element.parentNode.children).filter(function (child) {
    return child !== element;
  });
  return criteria ? children.filter(criteria) : children;
}

function ub_getNodeindex(elm) {
  return Array.prototype.slice.call(elm.parentNode.children).indexOf(elm);
}

function ub_handleTabEvent(tab) {
  var parent = tab.closest(".wp-block-ub-tabbed-content-holder");
  var isVertical = parent.classList.contains("vertical-holder");
  var activeStyle = parent.querySelector(".wp-block-ub-tabbed-content-tab-title-".concat(isVertical ? "vertical-" : "", "wrap.active")).getAttribute("style");
  var defaultStyle = parent.querySelector(".wp-block-ub-tabbed-content-tab-title-".concat(isVertical ? "vertical-" : "", "wrap:not(.active)")).getAttribute("style");
  ub_getSiblings(tab, function (elem) {
    return elem.classList.contains("wp-block-ub-tabbed-content-tab-title-".concat(isVertical ? "vertical-" : "", "wrap"));
  }).forEach(function (sibling) {
    sibling.classList.remove("active");

    if (defaultStyle) {
      sibling.setAttribute("style", defaultStyle);
    }
  });
  tab.classList.add("active");

  var _tab$parentElement$ge = tab.parentElement.getBoundingClientRect(),
      tabContainerLocation = _tab$parentElement$ge.x,
      tabContainerWidth = _tab$parentElement$ge.width;

  var _tab$getBoundingClien = tab.getBoundingClientRect(),
      tabLocation = _tab$getBoundingClien.x,
      tabWidth = _tab$getBoundingClien.width;

  if (tabContainerLocation > tabLocation) {
    tab.parentElement.scrollLeft -= tabContainerLocation - tabLocation;
  }

  if (tabLocation + tabWidth > tabContainerLocation + tabContainerWidth) {
    tab.parentElement.scrollLeft -= tabContainerLocation - tabLocation;

    if (tabWidth <= tabContainerWidth) {
      tab.parentElement.scrollLeft -= tabContainerWidth - tabWidth;
    }
  }

  if (activeStyle) tab.setAttribute("style", activeStyle);
  var tabContentContainer = Array.prototype.slice.call(parent.children).filter(function (elem) {
    return elem.classList.contains("wp-block-ub-tabbed-content-tabs-content");
  })[0];
  Array.prototype.slice.call(tabContentContainer.children).forEach(function (tabContent, i) {
    if (ub_getNodeindex(tab) === i) {
      tabContent.classList.add("active");
      tabContent.classList.remove("ub-hide");
      var flickityInstances = Array.prototype.slice.call(tabContent.querySelectorAll(".ub_image_slider"));
      flickityInstances.forEach(function (instance) {
        var slider = Flickity.data(instance.querySelector("[data-flickity]"));
        slider.resize();
      });
    } else {
      tabContent.classList.remove("active");
      tabContent.classList.add("ub-hide");
    }
  });
}

Array.prototype.slice.call(document.getElementsByClassName("wp-block-ub-tabbed-content-tab-title-wrap")).forEach(function (instance) {
  instance.addEventListener("click", function () {
    ub_handleTabEvent(instance);
  });
});
Array.prototype.slice.call(document.getElementsByClassName("wp-block-ub-tabbed-content-tab-title-vertical-wrap")).forEach(function (instance) {
  instance.addEventListener("click", function () {
    ub_handleTabEvent(instance);
  });
});
Array.prototype.slice.call(document.getElementsByClassName("wp-block-ub-tabbed-content-scroll-button-container")).forEach(function (scrollButtonContainer) {
  var tabBar = scrollButtonContainer.previousElementSibling;
  var leftScroll = scrollButtonContainer.querySelector(".wp-block-ub-tabbed-content-scroll-button-left");
  var rightScroll = scrollButtonContainer.querySelector(".wp-block-ub-tabbed-content-scroll-button-right");

  var checkWidth = function checkWidth(_) {
    if (tabBar.scrollWidth > tabBar.clientWidth) {
      scrollButtonContainer.classList.remove("ub-hide");
    } else {
      scrollButtonContainer.classList.add("ub-hide");
    }
  };

  window.addEventListener("resize", checkWidth);
  leftScroll.addEventListener("click", function () {
    tabBar.scrollLeft -= tabBar.clientWidth;
  });
  rightScroll.addEventListener("click", function () {
    tabBar.scrollLeft += tabBar.clientWidth;
  });
  var tabBarIsBeingDragged = false;
  var oldScrollPosition = -1;
  var oldMousePosition = -1;
  tabBar.addEventListener("mousedown", function (e) {
    tabBarIsBeingDragged = true;
    oldScrollPosition = tabBar.scrollLeft;
    oldMousePosition = e.clientX - tabBar.getBoundingClientRect().x;
  });
  document.addEventListener("mouseup", function () {
    if (tabBarIsBeingDragged) {
      tabBarIsBeingDragged = false;
      oldScrollPosition = -1;
      oldMousePosition = -1;
    }
  });
  document.addEventListener("mousemove", function (e) {
    if (tabBarIsBeingDragged) {
      e.preventDefault();
      var newMousePosition = e.clientX - tabBar.getBoundingClientRect().x;
      tabBar.scrollLeft = oldScrollPosition - newMousePosition + oldMousePosition;
    }
  });
  checkWidth();
});