const cards = document.querySelector(".cards");
//menu
function toggleMenu() {
  const menu = document.getElementById("menuliens");
  menu.classList.toggle("hidden");
}

//filter
function toggleFilter() {
    const filtre = document.getElementById("filterchoix");
    filtre.classList.toggle("hidden");
}
//recherche
function RechercheToggle() {
    const recherch = document.getElementById("RecherchechBar");
    recherch.classList.toggle("hidden");
}

//fetch data
async function getJeux() {
    try {
        const res = await fetch("https://debuggers-games-api.duckdns.org/api/games");
        const mydata = await res.json();
        console.log(mydata)
        const data = mydata.results;
        data.forEach(result => {
            const cardi = document.createElement("div");
            cardi.className = `cardi flex justify-center items-end border-2 border-amber-600 rounded-2xl bg-contain bg-cover bg-no-repeat bg-center w-9/12 h-96`;
            cardi.style.backgroundImage = `url('${result.background_image}')`;

            const platforms = result.platforms.map(p=>p.platform.name).join(" , ");
            cardi.innerHTML = `
              <div class=" p-4 flex flex-col  w-full rounded-b-2xl h-2/5 text-white " style="background-color: rgba(30, 40, 58, 0.8);">
              <h2 class="text-center font-bold">${result.name}</h2> 
              <p class="text-sm"><span class="font-bold">Notes:</span> ${result.rating}</p>
              <p class="text-sm"><span class="font-bold">Plateformes:</span> ${platforms}</p>
              <button class="hover:bg-white hover:text-amber-500 text-white bg-amber-500 font-semibold py-2 px-6 rounded-3xl">
               Ajouter au favoris
              </button>
              </div>
            `;
            cards.appendChild(cardi);
        });
    } catch (error) {
        console.log(error);
    }
}
getJeux();