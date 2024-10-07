document.getElementById('year').textContent = new Date().getFullYear();

const menuLinks = document.querySelectorAll('.nav-menu a');


// Menú navegación
menuLinks.forEach(link =>{
    link.addEventListener('click', function(e){
        e.preventDefault;

    const targetClass = this.getAttribute('data-target');

    const targetSection = document.querySelector(`.${targetClass}`);

    targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    })
})

// Menú scroll color

window.addEventListener("scroll", function(){
    const header = this.document.querySelector("header");
    header.classList.toggle("down", window.scrollY > 180);
})
