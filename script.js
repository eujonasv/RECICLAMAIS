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
