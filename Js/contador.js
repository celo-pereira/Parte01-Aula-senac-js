    function contarVogais(str)
    {
        const vogais = str.match(/[aelou]/gi)// regex
        return vogais ? vogais.length : 0
    }
    const entradaDados = prompt("Insira um texto")

    if(entradaDados != null && entradaDados != "")
    {
        alert(contarVogais(entradaDados))
    }else{
        alert("Digite algo!!!")
    }

