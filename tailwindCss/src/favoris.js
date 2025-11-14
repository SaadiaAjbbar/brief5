
const cardsFavoris = document.querySelector(".cards_favoris");
//menu
function toggleMenu() {
    const menu = document.getElementById("menuliens");
    menu.classList.toggle("hidden");
}

//filter to
function toggleFilter() {
    const filtre = document.getElementById("filterchoix");
    filtre.classList.toggle("hidden");
}
//recherche toggle
function RechercheToggle() {
    const recherch = document.getElementById("RecherchechBar");
    recherch.classList.toggle("hidden");
}

function afficherFavoris() {
    let favoris = JSON.parse(localStorage.getItem("favoris")) || [];

    cardsFavoris.innerHTML = "";

    favoris.forEach(item => {
        const card = document.createElement("div");
        card.className = "favori_card flex justify-center  items-end border-2 border-amber-600 rounded-2xl bg-contain bg-cover bg-no-repeat bg-center w-9/12 min-h-96 md:w-2/5 lg:w-[25%]";
        card.style.backgroundImage = `url('${item.image}')`;
        card.innerHTML = `
            <div class="p-4 flex flex-col w-full rounded-b-2xl h-2/5 text-white " style="background-color: rgba(30, 40, 58, 0.8);" 
              <h2 class="text-center font-bold ">${item.name}</h2>
               <div class="">
                <p><strong class="text-amber-500">Notes :</strong> ${item.rating}</p>
                <p><strong class="text-amber-500">Genre :</strong> ${item.genres}</p>
               </div>
                <p class="text-sm mt-2"><strong class="text-amber-500">Description :</strong>${item.description.slice(0,150)}...</p>

                <button data-id="${item.id}" 
                        class="btn_supprimer bg-amber-500 text-white mt-3 px-4 py-2  rounded">
                    Supprimer de favoris
                </button>
            </div>
        `;

        cardsFavoris.appendChild(card);
    });

    // Bouton supprimer
    document.querySelectorAll(".btn_supprimer").forEach(btn => {
        btn.addEventListener("click", () => {
            supprimerFavori(btn.dataset.id);
        });
    });
}

function supprimerFavori(id) {
    let favoris = JSON.parse(localStorage.getItem("favoris")) || [];
    favoris = favoris.filter(item => item.id != id);
    localStorage.setItem("favoris", JSON.stringify(favoris));
    afficherFavoris(); // refresh
}

afficherFavoris();   