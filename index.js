// cursor
const crsr = document.querySelector(".cursor");

// Create the burst element inside the cursor
const burst = document.createElement("div");
burst.classList.add("cursor-burst");
crsr.appendChild(burst);

// Move the cursor with the mouse
document.addEventListener("mousemove", function (e) {
    crsr.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    crsr.style.opacity = "1";
});

// Hide cursor when mouse leaves
document.addEventListener("mouseout", function (e) {
    if (!e.relatedTarget && !e.toElement) {
        crsr.style.opacity = "0";
    }
});
document.addEventListener("mouseover", function () {
    crsr.style.opacity = "1";
});

// Click burst effect
document.addEventListener("mousedown", function () {
    burst.classList.remove("animate"); // Reset if already active
    void burst.offsetWidth; // Force reflow
    burst.classList.add("animate");
});

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


