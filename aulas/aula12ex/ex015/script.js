function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano ){
    window.alert('ERRO. Tente novamente')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', './imagens/menino.png')
            } else if (idade < 21){
                //ADOLESCENTE
                img.setAttribute('src', './imagens/jovem-h.png')
            } else if (idade <65){
                //ADULTO
                img.setAttribute('src', './imagens/homem.png')
            } else {
                //IDOOSO
                img.setAttribute('src', './imagens/idoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', './imagens/menina.png')
            } else if (idade < 21){
                //ADOLESCENTE
                img.setAttribute('src', './imagens/jovem-m.png')
            } else if (idade <65){
                //ADULTO
                img.setAttribute('src', './imagens/mulher.png')
            } else {
                //IDOOSO
                img.setAttribute('src', './imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}