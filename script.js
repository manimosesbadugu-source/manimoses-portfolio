document.addEventListener('DOMContentLoaded', () => {
    // Scroll active link styling and header background
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav ul li a");
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        let current = "";
        
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 250)) {
                current = section.getAttribute("id");
            }
        });
        
        navLi.forEach((a) => {
            a.classList.remove("active");
            if (a.getAttribute("href") === `#${current}`) {
                a.classList.add("active");
            }
        });
        
        // Sticky Header effect
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Intersection Observer for scroll animations (Premium reveal effect)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Opted not to unobserve to allow animations mapping to re-entry (dynamic feel), 
                // but can uncomment below to play only once.
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
        observer.observe(el);
    });
});
