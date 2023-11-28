import { WOW } from './vendor/wow.min';
import detectDevice from './components/detectDevice';
import AnimationOnScroll from './components/scrollEvents';
import Swiper from './vendor/swiper.min';
import { generateId, getCurrentYear } from './components/utils';
import GTMEvents from './components/gtmEvents';
import videoTeaser from './components/videoTeaser';
import Share from './components/shares';

const GTM = new GTMEvents();
const shares = new Share();

/// /////// DocReady //////////
document.addEventListener('DOMContentLoaded', () => {
  const animatedDigits = new AnimationOnScroll();
  animatedDigits.init();
  detectDevice();
  new WOW().init();
  GTM.addEventListeners();
  getCurrentYear();
  goNextSection();
  scrollTeaser(document.querySelector('.section-about'));
  videoTeaser();
  handleSlider();
  faqOpener();
  handleRating();
  shares.init();
});

function goNextSection() {
  const goNextBtns = document.querySelectorAll('.js-go-next');
  const sectionsList = document.querySelectorAll('section');

  goNextBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const btnParentNode = btn.closest('section');
      let sectionToScrollTo;
      sectionsList.forEach((el, index) => {
        if (el === btnParentNode) {
          sectionToScrollTo = sectionsList[index + 1];
          scrollToElement(sectionToScrollTo);
        }
      });
    });
  });
}

function scrollToElement(el) {
  const offs = 0;
  const y = el.getBoundingClientRect().top + window.scrollY + offs;
  window.scrollTo({ top: y, behavior: 'smooth' }); // element.scrollIntoView();
}

// scroll to next if URL contains #about

function scrollTeaser(el) {
  if (window.location.hash === '#about') {
    scrollToElement(el);
  }
}

function setActive(arr) {
  const activeClassName = 'active';
  arr.forEach((el) => {
    const itemText = el.querySelector('.item__text');
    if (el.classList.contains(activeClassName)) {
      itemText.style.transition = 'none';
      el.classList.remove(activeClassName);
    }
  });
}

function faqOpener() {
  const itemsList = document.querySelectorAll('.faq__item');
  const activeClassName = 'active';
  itemsList.forEach((item) => {
    item.addEventListener('click', () => {
      const itemText = item.childNodes[3]; // хардкод текстового дочернего узла
      if (item.classList.contains(activeClassName)) {
        itemText.style.transition = 'none';
        item.classList.remove(activeClassName);
      } else {
        setActive(itemsList);
        itemText.style.transition = '0.2s ease-in-out';
        item.classList.add(activeClassName);
      }
    });
  });
}

function handleSlider() {
  const swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 'auto',
    spaceBetween: 45,
    loop: true,
    breakpoints: {
      768: {
        spaceBetween: 16,
      },
    },
  });
  return swiper;
}

function handleRating() {
  const inputsList = document.querySelectorAll('.rating__input');
  const shareBlock = document.querySelector('.share');
  inputsList.forEach((input) => {
    input.addEventListener('click', () => {
      shareBlock.classList.add('visible');
    });
  });
}
