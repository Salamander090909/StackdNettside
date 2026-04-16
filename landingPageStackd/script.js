const revealTargets = document.querySelectorAll(
  ".hero-copy, .hero-visual, .trust-strip, .section-heading, .feature-card, .benefit-row, .cta-panel"
);

revealTargets.forEach((element, index) => {
  element.setAttribute("data-reveal", "");
  element.style.transitionDelay = `${Math.min(index * 80, 280)}ms`;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
  }
);

revealTargets.forEach((element) => observer.observe(element));
