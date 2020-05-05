function acaoBotao() {
    var valor01, valor02, resultado, operacao    
    valor01  = prompt("Digite o primeiro valor: ")
    operacao = prompt("Digite a operacao : + , - , * , / ")
    valor02  = prompt("Digite o segundo valor: ")
    
    if (operacao == "+" ){
        resultado = parseint(valor01) + parseint(valor02)
    }else if(operacao == "-" ){
        resultado = parseint(valor01) - parseint(valor02)
    }else if(operacao == "*" ){
        resultado = parseint(valor01) * parseint(valor02)
    }else if(operacao == "/" ){
        resultado = parseint(valor01) / parseint(valor02)
    }
    document.getElementById("paragrafo").innerText = resultado
}

