let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');



document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () =>{
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active'); 
};

document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});

const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.href === window.location.href) {
      link.setAttribute('aria-current', 'page');
    }
  });

  document.querySelectorAll(".image-item").forEach(item => {
    item.addEventListener("click", function() {
      const link = this.getAttribute("data-link");
      if (link) {
        window.location.href = link;
      }
    });
  });

  // Create the overlay and zoomed image elements
  const overlay = document.createElement("div");
  overlay.classList.add("image-zoom-overlay");

  const zoomedImg = document.createElement("img");
  overlay.appendChild(zoomedImg);
  document.body.appendChild(overlay);

  // Zoomable images event listener
  document.querySelectorAll(".zoomable").forEach(img => {
    img.addEventListener("click", () => {
      zoomedImg.src = img.src;
      overlay.style.display = "flex";
    });
  });

  

const fleet1 = document.querySelector(".fleet__wrapper-1 .fleet__images");
const fleet2 = document.querySelector(".fleet__wrapper-2 .fleet__images");

const fleet1Content = Array.from(fleet1.children);
const fleet2Content = Array.from(fleet2.children);

fleet1Content.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  fleet1.appendChild(duplicateNode);
});

fleet2Content.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  fleet2.appendChild(duplicateNode);
});

ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".banner__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".banner__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".banner__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

