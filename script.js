// -----------------------------
// Configuração (substitua aqui)
// Insira o número do WhatsApp no formato internacional sem sinais, por exemplo:
// 5511999998888  -> Brasil +55, DDD 11, número 99998-8888
// -----------------------------
const WHATSAPP_NUMBER = "5511999998888"; // <-- troque para o número do cliente
const DEFAULT_MESSAGE = encodeURIComponent("Olá! Gostaria de agendar um horário na Barbearia Carioca.");

// Utility: limpa caracteres não numéricos (por segurança)
function cleanNumber(n){
  return (n||"").replace(/\D+/g,"");
}

function openWhatsApp(){
  const clean = cleanNumber(WHATSAPP_NUMBER);
  if(!clean){
    alert("Número de WhatsApp não configurado. Edite script.js e informe o número.");
    return;
  }
  // monta o link wa.me
  const link = `https://wa.me/${clean}?text=${DEFAULT_MESSAGE}`;
  window.open(link, "_blank");
}

// floating button click
document.getElementById("waFloat").addEventListener("click", openWhatsApp);

// year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// small accessibility: enable keyboard activation
document.getElementById("waFloat").addEventListener("keydown", (e)=>{
  if(e.key === "Enter" || e.key === " ") openWhatsApp();
});
