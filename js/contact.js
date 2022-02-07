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