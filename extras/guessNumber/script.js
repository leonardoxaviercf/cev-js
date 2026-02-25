const botao = document.querySelector('button#botao')
botao.addEventListener('click', verificarNumero)

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
const resposta = document.querySelector('p#resultado')

var campoEntrada = document.querySelector('input#num')
campoEntrada.focus()

var campoReset = document.querySelector('p#p-reset')
var botaoReset = document.createElement('input')
botaoReset.setAttribute('id', 'b-reset')
botaoReset.setAttribute('type', 'button')
botaoReset.setAttribute('value', 'Resetar')

var rodada = 1

function verificarNumero() {
    var palpite = Number(campoEntrada.value)
    if (!palpite) {
        window.alert('Digite um valor.')
        return
    }

    if (rodada <= 10) {
        if (palpite == numeroAleatorio) {
        resposta.textContent = `Parabéns! Você ganhou na ${rodada}º rodada!`
        campoReset.appendChild(botaoReset)
        botaoReset.addEventListener('click', resetarGame)
        } else {
            if (palpite > numeroAleatorio) {
                resposta.textContent = 'Errou! Você está muito acima.'
            } else {
                resposta.textContent = 'Errou! Você está muito abaixo.'
            }
        }
    }

    else {
        resposta.textContent = 'Você perdeu! Número de rodadas ultrapassou 10.'
        botao.disabled = true
        campoEntrada.disabled = true
        campoReset.appendChild(botaoReset)
        botaoReset.addEventListener('click', resetarGame)
    }

    rodada++
    document.querySelector('input#num').value = ''
}

function resetarGame() {
    resposta.textContent = 'Vamos jogar?'
    botao.disabled = false
    campoEntrada.disabled = false
    rodada = 1
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    campoReset.removeChild(document.querySelector('input#b-reset'))
}