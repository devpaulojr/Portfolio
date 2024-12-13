const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 40)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    navlist.classList.toggle('open');
    if(window.scrollY < 90){
        header.classList.toggle ("sticky");
    }
    
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

const topo = document.getElementById("top");

window.addEventListener("scroll", function() {
    topo.classList.toggle ("show-top", window.scrollY > 140)
    topo.classList.toggle ("hide-top", window.scrollY < 140);
});

window.onload = () => {
    topo.classList.toggle ("hide-top");
}


const botaoToggle = document.querySelector('.btn-toggle');
const alternativas = document.querySelectorAll('.alternativa');


botaoToggle.addEventListener('click', () => {
    let listaVisivel = false;

    
    alternativas.forEach(item => {
        if (!item.classList.contains('escondida')) {
            listaVisivel = true;
        }
    });

    
    alternativas.forEach(item => {
        if (listaVisivel) {
            item.classList.add('escondida');
            botaoToggle.textContent = 'Mostrar notas';
        } else {
            item.classList.remove('escondida'); 
            botaoToggle.textContent = 'Esconder notas';
        }
    });
});
