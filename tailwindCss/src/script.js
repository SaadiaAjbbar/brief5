const cards = document.querySelector(".cards");

let loading = document.getElementById("loading");
let tousJeux = [];
let precedente = document.getElementById("precedente");
let nextPage = "https://debuggers-games-api.duckdns.org/api/games"
let next = document.getElementById("next");
let numpage = document.getElementById("numpage");
let pagePrecedent = null;

let searchInput = document.querySelector("input[type='search']");
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
//*******fonction ajouter favoris
function ajouterFavoris(jeu) {
    let favoris = JSON.parse(localStorage.getItem("favoris")) || [];

    // verifier cas  ajoutee deja
    const existe = favoris.some(item => item.id === jeu.id);
    if (!existe) {
        favoris.push(jeu);
        localStorage.setItem("favoris", JSON.stringify(favoris));
        alert("Jeu ajouté au favoris !");
    } else {
        alert("Ce jeu est déjà dans vos favoris.");
    }
}



//fetch data
async function getJeux() {
    try {
        const res = await fetch(nextPage);
        const mydata = await res.json();
        tousJeux = mydata.results;
        numpage.textContent = mydata.page;
        nextPage = mydata.next;
        pagePrecedent = mydata.previous;
        //search method
        searchInput.addEventListener("input", e => {
            const value = e.target.value.toLowerCase();
            const cardis = document.querySelectorAll(".cardi");

            cardis.forEach(card => {
                const name = card.querySelector(".name").textContent.toLowerCase();


                if (name.includes(value)) {
                    card.style.display = "flex"; // afficher
                } else {
                    card.style.display = "none"; // cacher
                }
            });
        });

        displayJeux(tousJeux);

    } catch (error) {
        console.log(error);
    }
}
//fetch precedent page
async function getPrecedente() {
    try {
        const res = await fetch(pagePrecedent);
        const mydata = await res.json();
        tousJeux = mydata.results;
        nextPage = mydata.next;
        numpage.textContent = mydata.page;
        pagePrecedent = mydata.previous;

        //search method
        searchInput.addEventListener("input", e => {
            const value = e.target.value.toLowerCase();
            const cardis = document.querySelectorAll(".cardi");

            cardis.forEach(card => {
                const name = card.querySelector(".name").textContent.toLowerCase();


                if (name.includes(value)) {
                    card.style.display = "flex"; // afficher
                } else {
                    card.style.display = "none"; // cacher
                }
            });
        });
        console.log(pagePrecedent);
        displayJeux(tousJeux);
    } catch (error) {
        console.log(error);
    }
}
//afficher les jeux
function displayJeux(data) {
    loading.style.display = "none";
    cards.innerHTML = "";
    data.forEach(result => {
        const cardi = document.createElement("div");
        cardi.className = `cardi flex justify-center items-end border-2 border-amber-600 rounded-2xl bg-contain bg-cover bg-no-repeat bg-center w-9/12 min-h-96 cursor-pointer`;
        cardi.style.backgroundImage = `url('${result.background_image}')`;

        const platforms = result.parent_platforms.map(p => p.platform.name).join(", ");
        const genres = result.genres.map(g => g.name).join(" , ");

        cardi.innerHTML = `
            <div class="p-4 flex flex-col w-full rounded-b-2xl h-2/5 text-white" style="background-color: rgba(30, 40, 58, 0.8);">
                <h2 class="name text-center font-bold">${result.name}</h2> 
                <p class="text-sm"><span class="font-bold">Notes:</span> ${result.rating}</p>
                <p class="text-sm"><span class="font-bold">Genres:</span> ${genres}</p>
                <p class="text-sm"><span class="font-bold">Plateformes:</span> ${platforms}</p>
                <button class="btn_fav hover:bg-white hover:text-amber-500 text-white bg-amber-500 font-semibold py-2 px-6 rounded-3xl">
                  Ajouter au favoris
                </button>

            </div>
        `;
        // bouton ajouter au favoris
        const btnFavoris = cardi.querySelector(".btn_fav");
        btnFavoris.addEventListener("click", (e) => {
            e.stopPropagation();
            const jeuFavoris = {
                id: result.id,
                name: result.name,
                image: result.background_image,
                rating: result.rating,
                genres: genres,
                platforms: platforms,
                description: result.description || "Pas de description"
            };

            ajouterFavoris(jeuFavoris);
        });

        // event de click sur jeu alors voir detail
        cardi.addEventListener("click", () => {
            document.getElementById("detailJeu").classList.remove("hidden");
            document.getElementById("detailName").textContent = result.name;
            document.getElementById("detailImage").src = result.background_image;
            document.getElementById("detailGenres").textContent = "Genres: " + genres;
            document.getElementById("detailPlatforms").textContent = "Plateformes: " + platforms;
            document.getElementById("detailRating").textContent = "Notes: " + result.rating;
            document.getElementById("detailDescription").textContent = "description:" + result.description.slice(0, 100) || "Pas de description disponible";
        });

        cards.appendChild(cardi);
    });
}

// Close detail
document.getElementById("closedetail").addEventListener("click", () => {
    document.getElementById("detailJeu").classList.add("hidden");
});

// Optional: click f background → close detail
document.getElementById("detailJeu").addEventListener("click", (e) => {
    if (e.target.id === "detailJeu") {
        document.getElementById("detailJeu").classList.add("hidden");
    }
});



next.addEventListener("click", () => {
    console.log(" next");
    cards.innerHTML="<img id='loading' src='images/loading.gif'>"
    getJeux();
})
precedente.addEventListener("click", () => {
    console.log("precedente page")
    if (pagePrecedent == null) {
        window.alert("vous etes dans la premiere page");
    } else {
        cards.innerHTML="<img id='loading' src='images/loading.gif'>"
        getPrecedente();
    }
})




getJeux();