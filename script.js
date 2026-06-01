// Número da drogaria
const telefone = "5562998720893";

// Botões das promoções
const botoes = document.querySelectorAll(".card-promocao button");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const produto = botao.parentElement.querySelector("h3").textContent;

        const mensagem = `Olá! Tenho interesse na promoção: ${produto}`;

        window.open(
            `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`,
            "_blank"
        );
    });
});

// Formulário de contato
const formulario = document.querySelector("form");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;

    alert(`Obrigado pelo contato, ${nome}! Em breve retornaremos.`);

    formulario.reset();
});

// Animação das seções ao aparecer na tela
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});