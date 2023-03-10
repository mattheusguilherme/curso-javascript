function carregar()
{
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12)
    {
        img.src = "imagens/manha-redondo2.png"
    }
    else if (hora >= 12 && hora < 18)
    {
        img.src = "imagens/tarde-redondo2.png"
    }
    else
    {
        img.src = "imagens/noite-redondo.png"
    }
}

