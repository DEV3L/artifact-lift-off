document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();

  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
          &copy; ${currentYear} Site built by Justin Beall from Dev3loper AI 
          | AI-XP | <a href="https://dev3loper.ai" target="_blank">dev3loper.ai</a>
  `;

  document.body.appendChild(footer);
});
