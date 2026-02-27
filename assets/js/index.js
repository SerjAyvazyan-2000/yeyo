


const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  const headerTop = document.querySelector("header");
  if (window.scrollY > 0) {
    headerTop.classList.add("moved");
  } else {
    headerTop.classList.remove("moved");
  }
});





const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");

const currentTheme = savedTheme || (prefersDark ? "dark" : "light");
document.documentElement.setAttribute("data-theme", currentTheme);
updateImages(currentTheme);

function updateImages(theme) {
  const images = document.querySelectorAll("img[data-light][data-dark]");
  images.forEach(img => {
    img.src = theme === "dark" ? img.dataset.dark : img.dataset.light;
  });
}

// const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
// const savedTheme = localStorage.getItem("theme");

// const currentTheme = savedTheme || (prefersDark ? "dark" : "light");
// setTheme(currentTheme);

// function setTheme(theme) {
//   document.documentElement.setAttribute("data-theme", theme);
//   localStorage.setItem("theme", theme);
//   updateImages(theme);
// }

// function updateImages(theme) {
//   document.querySelectorAll("img[data-light][data-dark]").forEach(img => {
//     img.src = theme === "dark" ? img.dataset.dark : img.dataset.light;
//   });
// }

// document.querySelectorAll(".theme-btn").forEach(btn => {
//   btn.addEventListener("click", () => {
//     setTheme(btn.dataset.themeBtn);
//   });
// });





document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".animate-item");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const index = [...items].indexOf(entry.target);
        entry.target.style.transitionDelay = `${0.15}s`;
        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      }),
    { threshold: 0.1 }
  );

  items.forEach((item) => observer.observe(item));
});




document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll(
    ".fade-left, .fade-right, .fade-top, .fade-bottom"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
        
        }
      });
    },
    {
      threshold: 0.15, 
    }
  );

  animatedItems.forEach((item) => observer.observe(item));
});


document.querySelectorAll('.menu-list-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


const faqWrappers = document.querySelectorAll(".faq-item-wrapper");

faqWrappers.forEach(wrapper => {
  const item = wrapper.querySelector(".faq-item");
  const icon = wrapper.querySelector(".faq-item-icon");

  const toggle = () => {
    const isActive = item.classList.contains("active");

    faqWrappers.forEach(w => {
      w.querySelector(".faq-item").classList.remove("active");
      w.querySelector(".faq-item-icon").classList.remove("active");
    });

    if (!isActive) {
      item.classList.add("active");
      icon.classList.add("active");
    }
  };

  item.addEventListener("click", toggle);
  icon.addEventListener("click", toggle);
});


document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(
    ".hero-tags-items, .how-work-tags"
  );

  let speed = 0.5;

  containers.forEach((container) => {
    let animationId;
    let position = 0;
    let isRunning = false;

    function startMarquee() {
      if (window.innerWidth > 800 || isRunning) return;

      isRunning = true;

      const items = Array.from(container.children);

      items.forEach((item) => {
        const clone = item.cloneNode(true);
        container.appendChild(clone);
      });

      function animate() {
        position -= speed;

        if (Math.abs(position) >= container.scrollWidth / 2) {
          position = 0;
        }

        container.style.transform = `translateX(${position}px)`;
        animationId = requestAnimationFrame(animate);
      }

      animate();
    }

    function stopMarquee() {
      cancelAnimationFrame(animationId);
      container.style.transform = "translateX(0)";
      position = 0;
      isRunning = false;
    }

    function checkScreen() {
      stopMarquee();
      if (window.innerWidth <= 800) {
        startMarquee();
      }
    }

    checkScreen();
    window.addEventListener("resize", checkScreen);
  });
});


