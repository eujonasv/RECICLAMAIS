// Alterna a visibilidade das respostas das perguntas frequentes
function toggleAnswer(answerId) {
    const answer = document.getElementById(answerId);
    const questionBtn = document.querySelector(`[aria-controls="${answerId}"]`);
    const isHidden = answer.hasAttribute("hidden");

    // Oculta todas as respostas e reseta aria-expanded
    document.querySelectorAll('.faq-answer').forEach(ans => ans.setAttribute("hidden", ""));
    document.querySelectorAll('.faq-question').forEach(btn => btn.setAttribute("aria-expanded", "false"));

    // Se estava oculto, exibe a resposta atual
    if (isHidden) {
        answer.removeAttribute("hidden");
        questionBtn.setAttribute("aria-expanded", "true");
    }
}

// Controle de etapas do processo (carrossel)
let currentStep = 0;

function showStep(step) {
    const steps = document.querySelectorAll('.step');
    const stepNumber = document.getElementById('stepNumber');
    steps.forEach((stepElement, index) => {
        stepElement.classList.toggle('active', index === step);
    });
    stepNumber.textContent = step + 1; // Atualiza o número grande
}


// Espera o DOM carregar
document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll('.step');
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    if (steps.length > 0) {
        showStep(currentStep); // Inicializa o primeiro slide
    }

    if (nextBtn && steps.length > 0) {
        nextBtn.addEventListener("click", () => {
            currentStep = (currentStep + 1) % steps.length;
            showStep(currentStep);
        });
    }

    if (prevBtn && steps.length > 0) {
        prevBtn.addEventListener("click", () => {
            currentStep = (currentStep - 1 + steps.length) % steps.length;
            showStep(currentStep);
        });
    }
});


// Botões de navegação das etapas (com verificação de existência)
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
        currentStep = (currentStep + 1) % 3;
        showStep(currentStep);
    });

    prevBtn.addEventListener("click", () => {
        currentStep = (currentStep - 1 + 3) % 3;
        showStep(currentStep);
    });

    showStep(currentStep); // Inicializa o primeiro slide
}

// Botão "Acessar Mapa" da Home (verifica se existe na página)
const mapaBtn = document.getElementById("btn-mapa");
if (mapaBtn) {
    mapaBtn.addEventListener("click", () => {
        const mapaSection = document.getElementById("map");
        if (mapaSection) {
            mapaSection.scrollIntoView({ behavior: "smooth" });
        }
    });
}

// Efeito de rolagem na navbar
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// Mobile Navbar
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});
