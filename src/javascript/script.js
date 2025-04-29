$(document).ready(function() {
    // Toggle do menu móvel
    $('#mobile_btn').on('click', function () {
      $('#mobile_menu').toggleClass('active');
      $('#mobile_btn').find('i').toggleClass('fa-x');
    });
  
    const sections = $('section');
    const navItems = $('.nav-item');
    const header = $('header');
  
    // Destaque do item de nav conforme scroll
    $(window).on('scroll', function () {
      const scrollPosition = $(window).scrollTop() - header.outerHeight();
  
      // Sombra do header
      if (scrollPosition <= 0) {
        header.css('box-shadow', 'none');
      } else {
        header.css('box-shadow', '0 2px 5px rgba(0,0,0,0.1)');
      }
  
      // Encontrar seção ativa
      sections.each(function(i) {
        const sectionTop = $(this).offset().top - header.outerHeight();
        const sectionBottom = sectionTop + $(this).outerHeight();
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          navItems.removeClass('active');
          $(navItems[i]).addClass('active');
          return false; // sai do each
        }
      });
    });
  
    // ScrollReveal (se carregado)
    if (window.ScrollReveal) {
      ScrollReveal().reveal('#cta',            { origin: 'left',  distance: '20%', duration: 2000 });
      ScrollReveal().reveal('.dish',           { origin: 'left',  distance: '20%', duration: 2000 });
      ScrollReveal().reveal('#testimonial_chef',{ origin: 'left',  distance: '20%', duration: 1000 });
      ScrollReveal().reveal('.feedback',       { origin: 'right', distance: '20%', duration: 1000 });
    }
  });
  
// Inicialização do Swiper com loop infinito e autoplay (sem cssMode)
var swiper = new Swiper('.swiper-container', {
    loop: true,                // loop contínuo
    autoplay: {
      delay: 3000,             // troca a cada 3s
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination'
    },
    keyboard: true
  });
  
  
  // Função sair
  function sairDoSite() {
    window.location.href = 'https://www.google.com';
  }
  