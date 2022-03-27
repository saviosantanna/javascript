// emoji dedo U+1F449 // bandeira U+1F3C1	

function contar(){
    var inicio =window.document.getElementById('txtinicio')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpasso')
    var res = window.document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert(`[ERRO!] Favor preencher todos os campos, com passo maior que 0.`)
    } else {
        inicio = Number (inicio.value)
        fim = Number (fim.value)
        passo = Number (passo.value)
            if (passo == 0 || passo < 0){
                window.alert(`[ERRO] Passo deve ser maior que 0!`)
            } else {
                var contagem= `Contando: \n`
                if (inicio < fim){
                    for (var i = inicio; i <= fim; i = i + passo){
                        if (i==inicio){
                            contagem += i
                        } else {
                            contagem = `${contagem} \u{1F449} ${i}`
                        }                
                    }
                } else {
                    for (var i = inicio; i >= fim; i = i - passo){
                        if (i==inicio){
                            contagem += i
                        } else {
                            contagem = `${contagem} \u{1F449} ${i}`
                        }                
                    }
                }
                contagem = `${contagem} > \u{1F3C1}`            
                res.innerHTML = `${contagem}`
                }
            }    
}
