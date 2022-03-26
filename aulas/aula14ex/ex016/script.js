// emoji dedo &#128073 // bandeira &#127937

function contar(){
    var inicio = Number(window.document.getElementById('txtinicio').value)
    var fim = Number(window.document.getElementById('txtfim').value)
    var passo = Number(window.document.getElementById('txtpasso').value)
    var res = window.document.getElementById('res')
    /*window.alert(`Valores digitados:\nValor de Início: ${inicio}\nValor Final: ${fim}\nPasso: ${passo}`)*/
    
    if (inicio == "" || fim == "" || passo == ""){
        window.alert(`Favor preencher todos os campos`)
    } else if (fim < inicio){
            window.alert(`O valor de Início não pode ser maior que o valor fim.`)
        } else { 
            var contagem= `Contando: \n`
            for (var i = inicio; i <= fim; i = i + passo){
                if (i==inicio){
                    contagem = i
                } else {
                    contagem = `${contagem} > ${i}`
                }                
            }
            contagem = `${contagem} > bandeira`            
            res.innerHTML = `${contagem}`
        }        
}
