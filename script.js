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

// -----menu-----
const menuIcon = document.getElementById("menu_icon");
const menuList = document.getElementById("menu");

menuIcon.addEventListener("click", () => {
  if (menuList.classList.contains("show")) {
    // Hide menu
    menuList.classList.remove("show");
    setTimeout(() => {
      menuList.style.display = "none";
    }, 300); // match CSS transition duration

    // Switch back to hamburger
    menuIcon.classList.remove("ri-close-line");
    menuIcon.classList.add("ri-menu-4-fill");
  } else {
    // Show menu
    menuList.style.display = "block";
    setTimeout(() => {
      menuList.classList.add("show");
    }, 10); // tiny delay to trigger transition

    // Switch to close icon
    menuIcon.classList.remove("ri-menu-4-fill");
    menuIcon.classList.add("ri-close-line");
  }
});


// -----shop list details-----

// -----img slider----

var mainImage = document.getElementById("main_image")
var smallImage = document.getElementsByClassName("small_image")

smallImage[0].onclick = function () {
  mainImage.src = smallImage[0].src
}
smallImage[1].onclick = function () {
  mainImage.src = smallImage[1].src
}
smallImage[2].onclick = function () {
  mainImage.src = smallImage[2].src
}
smallImage[3].onclick = function () {
  mainImage.src = smallImage[3].src
}