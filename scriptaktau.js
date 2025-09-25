document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".suret");
    images.forEach((img, index) => {
      setTimeout(() => {
        img.classList.add("visible");
      }, index * 500);
    });
  
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    images.forEach((img) => observer.observe(img));
  
    document.getElementById("feedback-form").addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      if (name && email && message) {
        alert("Сәтті жіберілді");
      } else {
        alert("Барлық өрістерді толтырыңыз!");
      }
    });

  });
