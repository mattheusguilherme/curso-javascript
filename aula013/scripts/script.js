function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("iano")
    var res = document.querySelector("div#res")
    if (fano.ariaValueMax.length == 0 || Number(fano.value) > ano) 
    {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    }
    else 
    {
        var fsex = document.getElementsByName('isex')
        var idade = ano - Number(fano.value)
        var genero = ''

        if (fsex[0].checked)
        {
            
        }
    }
}