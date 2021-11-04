const accordions = document.querySelectorAll(".accordion");
for (const accordion of accordions) {
  const panels = accordion.querySelectorAll(".accordion-item");
  for (const panel of panels) {
    const head = panel.querySelector(".accordion-title");
    head.addEventListener('click', () => {
      for (const otherPanel of panels) {
        if (otherPanel !== panel) {
          otherPanel.classList.remove('accordion-expanded');
        }
      }
      panel.classList.toggle('accordion-expanded');
    });
  }
}