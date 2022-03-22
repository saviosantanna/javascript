function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    hora = 19

    msg.innerHTML = `Agora são ${hora} horas.`  

   if (hora >= 0 && hora < 12){
    //BOMDIA
        img.src = 'manha-r-250px.png'
        document.body.style.background ='#505f66'
   }else if (hora >= 12 && hora <= 18) {
        //BOATARDE
        img.src = 'tarde-r-250px.png'
        document.body.style.background ='#f8e196'
    }else {
        //BOA NOITE
        img.src = 'noite-r-250px.png'
        document.body.style.background ='#3d376e'
    }
}
