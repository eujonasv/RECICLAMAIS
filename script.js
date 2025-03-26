// Função para mostrar/ocultar as respostas das perguntas frequentes
function toggleAnswer(answerId) {
    const answer = document.getElementById(answerId);
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}
