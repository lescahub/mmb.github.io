// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// hilangkan

const menu = document.querySelector('#menu');

document.addEventListener('click',function(e){
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
  }
})