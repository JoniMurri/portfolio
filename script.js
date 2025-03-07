// Objekti tallentamaan ladatut sisällöt
const loadedContent = {};

// Lista sivuista ja niiden ID:t
const pages = [
  { url: "content.html", id: "content" },
  { url: "content-skills.html", id: "content-skills" },
  { url: "portfolio.html", id: "portfolio" },
  { url: "content-contact.html", id: "content-contact" },
];

// Funktio lataa kaikki sivut heti, kun sivu avataan
function loadAllPages() {
  pages.forEach((page) => {
    const section = document.getElementById(page.id);

    // Tarkistetaan, onko sivu jo ladattu
    if (loadedContent[page.id]) {
      console.log(`Sivu ${page.id} on jo ladattu.`);
      section.innerHTML = loadedContent[page.id]; // Näytetään ladattu sisältö
    } else {
      console.log(`Ladataan sivu ${page.url}...`);

      // Ladataan sivu vain ensimmäistä kertaa
      fetch(page.url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP-virhe! Status: ${response.status}`);
          }
          return response.text();
        })
        .then((data) => {
          loadedContent[page.id] = data; // Tallennetaan ladattu sisältö
          section.innerHTML = data; // Asetetaan sisältö osioon
        })
        .catch((error) => {
          console.error(`Sivun lataaminen epäonnistui:`, error);
        });
    }
  });
}

// Ladataan kaikki sivut heti, kun DOM on ladattu
document.addEventListener("DOMContentLoaded", loadAllPages);
