document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries
      .filter((entry) => entry.isIntersecting)
      .forEach((entry) => {
        entry.target.classList.add("viewed");
        observer.unobserve(entry.target);
      });
  });

  const allAnimatedElements = document.querySelectorAll(".animate");

  allAnimatedElements.forEach((animatedElement) =>
    observer.observe(animatedElement)
  );
});
