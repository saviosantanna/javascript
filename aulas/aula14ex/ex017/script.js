function calcular() {
    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById('tabuada')
        
    if (num.value.length == 0){
        window.alert(`[ERRO]Favor inserir um número!`)
    } else {        
        num = Number(num.value)
        if (num > 100000000){
            window.alert(`[ERRO]Número muito grande. O número máximo é 100.000.000`)
        } else {
            tab.innerHTML = ''
            for (i=1; i <= 10; i++){
                var item = window.document.createElement('option')
                item.text = `${num}x${i} = ${num*i}`
                item.value = `tab${i}`
                tab.appendChild(item)
            }
        }
    }
}