var searchSVG = `<svg id="search" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M17.4583 25.7917C22.0607 25.7917 25.7917 22.0607 25.7917 17.4583C25.7917 12.856 22.0607 9.125 17.4583 9.125C12.856 9.125 9.125 12.856 9.125 17.4583C9.125 22.0607 12.856 25.7917 17.4583 25.7917Z"
    stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" /> <path d="M27.875 27.875L23.3438 23.3438" stroke="white" stroke-width="3" stroke-linecap="round"
    stroke-linejoin="round" /></svg>`

if (document.body.clientWidth > 800) {
    document.querySelector(".JH").addEventListener("mouseenter", jhOuvert);
    document.querySelector(".JH").addEventListener("mouseleave", jhFerme);

    function jhOuvert() {
        document.querySelector(".JH").classList.add("JHouvert");
    }

    function jhFerme() {
        document.querySelector(".JH").classList.remove("JHouvert");
    }
}

function jhOuvert() {
    document.querySelector(".JH").classList.add("JHouvert");
}

function jhFerme() {
    document.querySelector(".JH").classList.remove("JHouvert");
}

document.querySelectorAll(".cog").forEach(e => {
    e.addEventListener("click", cog);
})

function cog() {
    this.classList.toggle("tourne");

    document.querySelectorAll(".flagContainer").forEach(e => {
        e.classList.toggle("flagWoosh");
    })
}

document.querySelectorAll(".trigger").forEach(e => {
    e.addEventListener("click", menu);
})

function menu() {
    document.querySelector(".menu").classList.toggle("menuOuvert");

    setTimeout(function () {
        document.querySelectorAll(".cog").forEach(f => {
            f.classList.remove("tourne");
        })

        document.querySelectorAll(".flagContainer").forEach(g => {
            g.classList.remove("flagWoosh");
        })
    }, 200)
}