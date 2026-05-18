(function () {
  console.log("Chedilex script loaded");
  function injectFooter() {
    // Targets the placeholder div in your websites
    const containers = document.querySelectorAll(".chedilex-footer-container");

    if (containers.length > 0) {
      // CDN link to fetch your logo from the same repository
      // const logoURL = `chedilex-white-logo.png`;
      const logoURL = `https://cdn.jsdelivr.net/gh/chedilex/chedilex-assets-footer@main/chedilex-white-logo.png`;

      const footerHTML = `
                <div class="chedilex-footer-content" style="margin-top: 10px; color: rgba(255, 255, 255, 1); font-size: 0.9rem; display: flex; justify-content: center; align-items: center;">
                        Developed by
                        <a href="https://chedilex.pages.dev/" style="display: flex; align-items: center; text-decoration: none; color: rgba(255, 255, 255, 0.7);">
                             <img src="${logoURL}" alt="Chedilex Logo" style="height: 40px; margin-left: 2px;">
                        </a>
                </div>
            `;

      containers.forEach((container) => {
        container.innerHTML = footerHTML;
      });
    }
  }

  // Initialize the injection
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectFooter);
  } else {
    injectFooter();
  }
})();
