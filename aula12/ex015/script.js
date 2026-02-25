const botao = document.querySelector('button#botao')
botao.addEventListener('click', verificar_idade)
const data = new Date()
const anoAtual = data.getFullYear()

function verificar_idade() {
    var anoNascimento = Number(document.querySelector('input#ano-nascimento').value)
    var idade = anoAtual - anoNascimento
    var sexo = document.querySelector('input[name=sexo]:checked').value

    var res = document.querySelector('p#res')
    var imagem = document.querySelector('img#foto')

    if (!anoNascimento || anoNascimento > anoAtual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
        return
    }
    else {
        if (sexo == 'homem') {
            res.innerText = `Você é um ${sexo} de ${idade} anos.`
            if (idade <18) {
                imagem.src = 'assets/img/menino.png'
            }
            else if (idade >= 18 && idade < 60) {
                imagem.src = 'assets/img/homem.png'
            }
            else {
                imagem.src = 'assets/img/idoso.png'
            }
        }
        else {
            res.innerText = `Você é uma ${sexo} de ${idade} anos.`
            if (idade <18) {
                imagem.src = 'assets/img/menina.png'
            }
            else if (idade >= 18 && idade < 60) {
                imagem.src = 'assets/img/mulher.png'
            }
            else {
                imagem.src = 'assets/img/idosa.png'
            }
        }
    }
}