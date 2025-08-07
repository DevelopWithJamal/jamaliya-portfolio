 //Typing Animation
 
 document.addEventListener("DOMContentLoaded", function () {
        const roles = [
          "Full-Stack Developer",
    
          "MERN Enthusiast",
        ];
        const typingText = document.getElementById("typing-text");
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingDelay = 100;
        let deletingDelay = 50;
        let newTextDelay = 2000;

        function type() {
          const currentRole = roles[roleIndex];
          if (isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
          } else {
            typingText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
          }

          if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(type, newTextDelay);
            return;
          }

          if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, typingDelay);
            return;
          }

          setTimeout(type, isDeleting ? deletingDelay : typingDelay);
        }

        type();
      });



//Scroll Animation

 document.addEventListener("DOMContentLoaded", function () {
        const observerOptions = {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        };
        const observer = new IntersectionObserver(function (entries) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        }, observerOptions);
        document.querySelectorAll(".fade-in").forEach((el) => {
          observer.observe(el);
        });
      });

 


           


//Smooth Scroll Bar
            document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
              target.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          });
        });
      });



//Form Validation
            document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector("form");
        form.addEventListener("submit", function (e) {
          e.preventDefault();
          const formData = new FormData(form);
          const name = form.querySelector('input[type="text"]').value;
          const email = form.querySelector('input[type="email"]').value;
          const message = form.querySelector("textarea").value;
          if (name && email && message) {
            alert("Thank you for your message! I'll get back to you soon.");
            form.reset();
          } else {
            alert("Please fill in all fields.");
          }
        });
      });


 
  const menuBtn = document.getElementById("mobile-menu-btn");
  const closeBtn = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-0");
    mobileMenu.classList.add("translate-x-full");
  });

  // Close on nav item click
  document.querySelectorAll("#mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("translate-x-full");
    });
  });
  
 const scriptURL = 'https://script.google.com/macros/s/AKfycbwE3tuIAeKGwHEEMoh3bLkEusBFI8hNkNAUl51Qrorq2MEUu6FCpTvrH0yYUF2Zj0WWkw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
