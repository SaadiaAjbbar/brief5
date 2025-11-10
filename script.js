async function getJeux() {
    try {
        const res = await fetch("http://gamees-api.netlify.app/public/filteredGames.json");
        const mydata = await res.json();
        console.log(mydata)
        const hero_section = document.querySelector(".hero_section");
        const main = document.querySelector("main");
        for (let i = 0; i < 100; i++) {
            const cardi = document.createElement("div");
            main.insertBefore(cardi, hero_section.nextElementSibling);
            cardi.innerHTML = `<p>le nom de jeux num ${i} est ${mydata[i].name}`;
            cardi.style.backgroundColor = "green";
            cardi.style.width = "200px";
            
        }
    } catch (error) {
        console.log(error);
    }
}
getJeux();