document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".circle-button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const page = button.getAttribute("data-page");
      if (page) {
        window.location.href = `pages/${page}.html`;
      }
    });
  });
});