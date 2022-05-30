function verificar() {
    let data = new Date()
    let year = data.getFullYear()
    let fyear = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if (fyear.value.length == 0 || fyear.value > year) {
        window.alert(' [ERRO] Verifique os dados novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = year - Number(fyear.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'MASCULINO'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebem.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'homem-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                img.setAttribute('src', 'homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'FEMININO'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebef.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos gênero ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}