const newSlide = () => {
  const perez =document.querySelector(".perez");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll('.nav-links li');

  perez.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    perez.classList.toggle('toggle');
  
  });
  navLinks.forEach((link, index) => {

      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 2.2}s `;
      

  });
  
     
}

newSlide();