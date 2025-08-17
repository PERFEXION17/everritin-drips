const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector(".icon");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.classList.remove("open");
      icon.textContent = "+";
    } else {
      // close all others
      document.querySelectorAll(".accordion-content").forEach((c) => {
        c.style.maxHeight = null;
        c.classList.remove("open");
        c.previousElementSibling.querySelector(".icon").textContent = "+";
      });

      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add("open");
      icon.textContent = "–";
    }
  });
});