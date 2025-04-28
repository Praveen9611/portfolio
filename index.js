window.addEventListener('scroll', function () {
        const nav = document.querySelector('nav');              // get the nav element
        const homeSection = document.getElementById('profiles'); // get the HOME section

        // Calculate where the home section ends
        const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;

        // If the page is scrolled past the HOME section, add class
        if (window.scrollY >= homeBottom) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
});


  const image = document.getElementById('weather-image');
  const container = document.getElementById('iframe-container');
  const iframe = document.getElementById('weather-frame');

  image.addEventListener('click', function() {
    iframe.src = './weatherapp/index.html'; // or just './weatherapp/' if index.html is default
    container.style.display = 'block'; // Show iframe
    image.style.display = 'none'; // Hide the image after clicking
  });
