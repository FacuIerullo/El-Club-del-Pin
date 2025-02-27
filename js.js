const slider = document.querySelector('.slider');
    let index = 0;
    const totalImages = slider.children.length;
    const imagesToShow = 3;

    function nextSlide() {
      index++;
      if (index >= totalImages - imagesToShow + 1) {
        index = 0; 
      }
      updateSlider();
    }

    function prevSlide() {
      index--;
      if (index < 0) {
        index = totalImages - imagesToShow; 
      }
      updateSlider();
    }

    function updateSlider() {
      const width = slider.children[0].clientWidth; 
      slider.style.transform = `translateX(-${index * width}px)`;
    }

    window.addEventListener('scroll', function() {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 350) {
        navbar.classList.add('fixed-top');
      } else {
        navbar.classList.remove('fixed-top');
      }
    });