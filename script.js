// 🔹 Funktio, joka lisää uuden osion sisältöalueelle
function addSection(page) {
  fetch(page)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP-virhe! Status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      // Luo uusi div ja lisää ladattu sisältö
      const newSection = document.createElement("div");
      newSection.classList.add("content-section", "p-4", "mb-4");
      newSection.innerHTML = data;

      // Lisää uusi osio pääsisältöalueelle
      document.getElementById("content").appendChild(newSection);

      // Vieritä automaattisesti uuteen osioon
      newSection.scrollIntoView({ behavior: "smooth" });
    })
    .catch((error) => {
      console.error("Sivun lataaminen epäonnistui:", error);
      alert("Sivua ei voitu ladata.");
    });
}

// 🔹 Lataa oletuksena etusivun osio
document.addEventListener("DOMContentLoaded", function () {
  addSection("content.html");
});
