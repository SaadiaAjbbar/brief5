const cards = document.querySelector(".cards");
async function getJeux() {
    try {
        const res = await fetch("https://debuggers-games-api.duckdns.org/api/games");
        const mydata = await res.json();
        console.log(mydata)
        const data = mydata.results;
        data.forEach(result => {
            const cardi = document.createElement("div");
            cardi.className = `cardi  border-2 rounded-2xl border-amber-600`;
           // cardi.style.backgroundImage
            cardi.innerHTML = `
             <img src='${result.background_image}' alt='backgroundJeu' class=' object-contain'>
             <div class="p-4 text-center ">
               <h3 class="text-lg font-semibold text-white mb-2">${result.name}</h3>
               <p class="text-sm text-gray-400">${result.rating}⭐</p>
             </div>
            
            `;
            cards.appendChild(cardi);
        });
    } catch (error) {
        console.log(error);
    }
}
getJeux();