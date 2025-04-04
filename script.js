// Função para mostrar/ocultar as respostas das perguntas frequentes
function toggleAnswer(answerId) {
    const answer = document.getElementById(answerId);
    const allAnswers = document.querySelectorAll('.faq-answer');
    
    // Fecha todas as respostas antes de abrir a desejada
    allAnswers.forEach(a => {
        if (a !== answer) {
            a.style.display = "none";
        }
    });

    // Alterna entre mostrar e esconder a resposta
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
}

// Função para controlar o slide de etapas
let currentStep = 0;

function showStep(step) {
    const steps = document.querySelectorAll('.step');
    steps.forEach((stepElement, index) => {
        stepElement.classList.remove('active');
        if (index === step) {
            stepElement.classList.add('active');
        }
    });
}

document.getElementById("nextBtn").addEventListener("click", function () {
    currentStep = (currentStep + 1) % 3;
    showStep(currentStep);
});

document.getElementById("prevBtn").addEventListener("click", function () {
    currentStep = (currentStep - 1 + 3) % 3;
    showStep(currentStep);
});

// Inicializa a primeira etapa
showStep(currentStep);

// Botão "Acessar Mapa" da Home
document.getElementById("btn-mapa").addEventListener("click", function () {
    const mapaSection = document.getElementById("map");
    if (mapaSection) {
        mapaSection.scrollIntoView({ behavior: "smooth" });
    }
});

// Efeito ao rolar: mudar a aparência da navbar
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

