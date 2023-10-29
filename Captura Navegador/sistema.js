//Função para obter o navegador do Usuário
function obterNavegadorUsuário()
{
    const userAgent = navigator.userAgent
    console.log(userAgent)
    if(userAgent.indexOf("Chrome") != -1) return "Google Chrome"
    else if(userAgent.indexOf("Safari") != -1) return "Safari"
    else if(userAgent.indexOf("Firefox") != -1) return "Mozilla Firefox"
    else if(userAgent.indexOf("MSIE") != -1|| userAgent.indexOf("Trident/")) return "IE"
    else if(userAgent.indexOf("Edge") != -1) return"Microsoft Edge"
    else if(userAgent.indexOf("Opera") != -1|| userAgent.indexOf("ORP/")) return "Opera"
    else return "Navegador Desconhecido"

}

let navegadorUsuario = obterNavegadorUsuário()
document.getElementById("navegador").innerText = navegadorUsuario