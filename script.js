// Simples interação de feedback ao enviar formulário
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio real
    const name = document.getElementById("name").value;
    alert(`Obrigado por sua mensagem, ${name}! Entraremos em contato em breve.`);
    document.querySelector("form").reset(); // Reseta o formulário
});
