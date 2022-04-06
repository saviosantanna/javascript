vetor = []
i=0
verifica = false;

function add(){
    var n = window.document.getElementById('number')
    var tab = window.document.getElementById('valores')
    var num = Number(n.value)
    var res = window.document.getElementById('final')

    if (n.value.length == 0){
        window.alert('Favor inserir um número antes de adicionar!')
    } else {
        if (num < 1 || num > 100){
            window.alert('O número deve ser entre 1 e 100!')
        } else {
            if (i==0){
                tab.innerHTML = ''
            }
            verifica = false
            for (j=0; j<=i; j++){
                if (num == vetor[j]){
                    verifica = true;
                }
            }       
            if (verifica == false){
                res.innerHTML =''
                vetor[i]= Math.abs(num)
                var item = window.document.createElement('option')
                item.text = `Número ${vetor[i]} adicionado`
                item.value = `tab${i}`
                tab.appendChild(item)
                i++          
            }
            else {
                window.alert(`Número ${num} já existe!`)
            }
        }

    }
}


function calc(){
    var res = window.document.getElementById('final')
    var soma = 0
    if (i==0){
        window.alert(`Favor inserir um valor antes de finalizar!`)
    }
    else{
        for (j=0; j<i; j++){
            soma += vetor[j]
        }
        vetor.sort(function (a, b){return a-b});
        res.innerHTML = `Ao todo, temos ${vetor.length} números cadastrados<br><br>
        O maior valor informado foi ${vetor[i-1]}<br><br>
        O menor valor informado foi ${vetor[0]}<br><br>
        Somando todos os valores, temos ${soma}<br><br>
        A média dos valores digitados é ${soma/i}`
    }   
}