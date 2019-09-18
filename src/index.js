import 'normalize.css';
import './styles/style.scss';

window.addEventListener("scroll", e => {
  const header = document.getElementById("site-header");
  if(window.scrollY > 0) {
    header.classList.add("site-header--scrolled");
  } else {
    header.classList.remove("site-header--scrolled");
  }
})