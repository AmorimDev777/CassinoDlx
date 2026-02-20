let logo = document.getElementById("logoIDX");
let navLinks = document.getElementsByClassName("navLinks")[0];
let menuIcon = document.getElementsByClassName("hamburguerMenu")[0];
let saldoUser = document.getElementById("saldoUser");
let allHeaderLinks = document.querySelectorAll("a.linkHeader");
let sportsIconHeader = document.getElementById("sportsIconHeader");

let allPlayBtnCassino = document.querySelectorAll('.containerCassino .playBtn')
let allCardCassino = document.querySelectorAll('.containerCassino .card')

let tituloTransacao = document.querySelector(".tituloTransacao");
let valorDepositoInput = document.getElementById("valorDeposito");
let valorSaqueInput = document.getElementById("valorSaque");
let btnTransacao = document.getElementById("btnTransacao");

let allBntChangeSportsIcon = document.querySelectorAll(".bntChangeSportsIcon");
let allSportsIcon = document.querySelectorAll(".sportIconConf");

window.addEventListener("load", () => {
    carregar();
    pagina();
});

allPlayBtnCassino.forEach(btn=>{
    const card = btn.closest('.boxCard');
    btn.addEventListener('mouseenter', ()=> card.classList.add('hovered'));
    btn.addEventListener('mouseleave', ()=> card.classList.remove('hovered'));
});

const addClassOnLink = (page) => {
    allHeaderLinks.forEach((link) => {
        link.classList.remove("linkActive");
    });
    let linkToActive = document.querySelectorAll("a#linkHeader" + page);
    linkToActive.forEach((link) => {
        link.classList.add("linkActive");
        localStorage.setItem("activeLink", page);
    });
};

if (menuIcon) {
    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("activeMenu");
        menuIcon.classList.toggle("activeHamburguerMenu");
    });
}

if (logo) {
    logo.addEventListener("click", () => {
        logo.classList.toggle("pretoBranco");
        if (logo.classList.contains("pretoBranco")) {
            localStorage.setItem("logoStatus", "PB");
        } else {
            localStorage.setItem("logoStatus", "Colorido");
        }
    });
}

if (valorDepositoInput) {
    valorDepositoInput.addEventListener("focus", () => {
        valorDepositoInput.select();
        valorSaqueInput.value = "";
        btnTransacao.textContent = "Depositar";
        tituloTransacao.textContent = "Depositar";
    });
}

if (valorSaqueInput) {
    valorSaqueInput.addEventListener("focus", () => {
        valorSaqueInput.select();
        valorDepositoInput.value = "";
        btnTransacao.textContent = "Sacar";
        tituloTransacao.textContent = "Sacar";
    });
}

if (btnTransacao) {
    btnTransacao.addEventListener("click", () => {
        if (btnTransacao.textContent === "Depositar") {
            valorDeposito = Number(valorDepositoInput.value);
            transacao("deposito", valorDeposito ?? null);
        } else if (btnTransacao.textContent === "Sacar") {
            valorSaque = Number(valorSaqueInput.value);
            transacao("saque", valorSaque ?? null);
        } else {
            alert("Selecione um tipo de transação!");
        }
    });
}

function transacao(tipoTransacao, valor) {
    let saldoArmazenado = Number(localStorage.getItem("saldoUsuario"));
    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um valor válido");
        return;
    }
    if (tipoTransacao === "deposito") {
        let valorDeposito = Number(valor);
        localStorage.setItem("saldoUsuario", saldoArmazenado + valorDeposito);
        if (localStorage.getItem("saldoUsuario") > 9999999.99) {
            alert("Já está bom de grana, né? Pra que tudo isso?");
            localStorage.setItem("saldoUsuario", 9999999.99);
        }
        valorDepositoInput.value = "";
        valorDepositoInput.focus();
    } else if (tipoTransacao === "saque") {
        if (valor > saldoArmazenado) {
            if (confirm("Saldo insuficiente!!! Você quer sacar tudo?")) {
                localStorage.setItem("saldoUsuario", saldoArmazenado - saldoArmazenado);
                alert("Você sacou R$ " + saldoArmazenado.toFixed(2));
            } else {
                return;
            }
        } else {
            localStorage.setItem("saldoUsuario", saldoArmazenado - valor);
        }
        valorSaqueInput.value = "";
        valorSaqueInput.focus();
    } else {
        alert("Tipo de transação inválido!");
    }
    saldoUser.textContent =
    "R$ " +
    Number(localStorage.getItem("saldoUsuario")).toFixed(2).replace(".", ",");
}

function changeSportsIcon(esporte) {
    allSportsIcon.forEach((icon) => {
        if (icon.classList.contains(esporte)) {
            let novoIcone = icon.cloneNode(true);
            let iconeHTML = novoIcone.outerHTML;
            sportsIconHeader.innerHTML = iconeHTML;
            localStorage.setItem("iconeHTML", iconeHTML);
        }
    });
}

function pagina(e) {
    if (e && typeof e.preventDefault === "function") {
        e.preventDefault();
    }
    let activeLink = localStorage.getItem("activeLink");
    if (activeLink) {
        const params = new URLSearchParams(window.location.search);
        const currentPage = (params.get("page") || "home").toLowerCase();
        const targetPage = activeLink.toLowerCase();
        if (currentPage === targetPage) return;
        window.location.href = `?page=${targetPage}`;
    }
}

function carregar() {
    let status = localStorage.getItem("logoStatus");
    let saldoArmazenado = localStorage.getItem("saldoUsuario");
    let lastTxtHome = document.getElementsByClassName("lastTxtHome")[0];
    let activeLink = localStorage.getItem("activeLink");
    
    allBntChangeSportsIcon.forEach((btn) => {
        btn.addEventListener("click", () => {
            let esporteIcone = btn.getAttribute("data-sport");
            changeSportsIcon(esporteIcone);
        });
    });
    
    if (status === "PB") {
        if (logo) {
            logo.classList.add("pretoBranco");
        }
    }
    if (saldoArmazenado) {
        if (saldoUser) {
            saldoUser.textContent =
            "R$ " + Number(saldoArmazenado).toFixed(2).replace(".", ",");
        }
    } else {
        localStorage.setItem("saldoUsuario", 0);
        if (saldoUser) {
            saldoUser.textContent = "R$ 0,00";
        }
    }
    if (activeLink) {
        addClassOnLink(activeLink);
    }
    if (saldoArmazenado) {
        if (saldoArmazenado == 0) {
            if (lastTxtHome) {
                lastTxtHome.innerHTML =
                "faça um depósito agora e aposte nos nossos slots";
            }
        } else {
            if (lastTxtHome) {
                lastTxtHome.innerHTML =
                "jogue nossos jogos e tenha a chance de forrar neles";
            }
        }
    }
}

function alertar(a) {
    alert("Alertado com sucesso!!! " + a);
}
