// Navbar animation
document.addEventListener('DOMContentLoaded', function () {
    var lastScrollTop = 0;
    var navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            navbar.style.top = '-80px'; // Hide navbar on scroll down
        } else {
            navbar.style.top = '0'; // Show navbar on scroll up
        }
        lastScrollTop = scrollTop;
    });
});

// ========== Scroll Reveal ==========
ScrollReveal({
    reset: false,
    distance: '10px',
    duration: 1000,
    delay: 600
});
{ scale: 1 }


ScrollReveal().reveal('#title-section,#visimisi, #komponen', { scale: 0.85 });
ScrollReveal().reveal('.banner,#penjelasan-home,#latbar-img' ,{ origin: 'left' });
ScrollReveal().reveal('#img-home,#penjelasan-about' ,{ origin: 'right' });

// Typing Animation
const words = ["Apa Itu Smart Economy ?"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 140);
}

type();