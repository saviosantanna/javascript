
var vetor = []

function add(vetor) {
var num = window.document.getElementById('number')
var tab = window.document.getElementById('valores')
var ver = true;
k = true
    if (num.value.length == 0){
        window.alert('Favor inseir um número antes de adicionar!')
    } else if (Number(num.value) < 1 || Number(num.value) > 100) {
                window.alert('Favor inserir um número entre 1 e 100!')
            } else if (i=0){
                var item = window.document.createElement('option')                
                vetor.text = `Valor ${Number(num.value)} adicionado!`
                vetor.value =`tab${i}`
                tab.appendChild(vetor[i])
                                
                    } else {
                            
                            for (j=0; j<i; j++){
                                if (vetor[i]==vetor[j]){
                                    ver = false;
                                }                        
                            }
                            if (ver){
                                var item = window.document.createElement('option')
                                vetor = item
                                vetor.text = `Valor ${Number(num.value)} adicionado!`
                                vetor.value =`tab${i}`
                                tab.appendChild(vetor)
                                i++
                            } else {
                                window.alert('Valor inválido ou já encontrado na lista')
                            }
                        }
                        window.alert(`valor de i: ${i}`)
}