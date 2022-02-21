setTimeout(stopLoading, 1000);
setTimeout(boucleTexte, 2000);
document.querySelector(".texte1").innerHTML = '<span id="curseur">|</span>';

function stopLoading() {
    document.querySelector(".loadingScreen").classList.add("byeByeLoading");
}

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

curseurOn();

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

var text = 'Je suis développeur web spécialisé front-end, mais je fais aussi du graphisme et de la vidéo.';

let i = 94;

function boucleTexte() {
    setTimeout(function () {
        const editedText = text.slice(0, -i);
        document.querySelector(".texte1").innerHTML = editedText + '<span id="curseur">|</span>';

        i--;

        if (i > 0) {
            boucleTexte();
        }
        if (i == 0) {
            document.querySelector(".texte1").innerHTML = text + '<span id="curseur">|</span>';
        }
    }, 25)
}

function curseurOn() {
    document.querySelector("#curseur").style.opacity = 1;

    setTimeout(curseurOff, 750);
}

function curseurOff() {
    document.querySelector("#curseur").style.opacity = 0;

    setTimeout(curseurOn, 750);
}
