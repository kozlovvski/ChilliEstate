import 'normalize.css';
import './styles/style.scss';
import smoothscroll from "smoothscroll-polyfill";

// Element.scrollIntoView polyfill for Safari
smoothscroll.polyfill();

document
  .querySelectorAll("a[data-for]")
  .forEach(link => {
    const href = link.getAttribute("href");
    link.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    });
  });

window.addEventListener("scroll", e => {
  const header = document.getElementById("site-header");
  if(window.scrollY > 0) {
    header.classList.add("site-header--scrolled");
  } else {
    header.classList.remove("site-header--scrolled");
  }
})

window.onload = () => {
  document.getElementById("menu-button").addEventListener("click", e => {
    Array.from(document.getElementsByClassName("nav__list")).forEach(elem => {
      elem.classList.toggle("nav__list--active")
    })
  })

  Array.from(document.getElementsByClassName("nav__item")).forEach(elem => {
    elem.addEventListener("click", e => {
      Array.from(document.getElementsByClassName("nav__list")).forEach(elem => {
        elem.classList.remove("nav__list--active")
      })
    })
  })
}