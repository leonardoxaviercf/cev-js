const botaoAdicionar = document.querySelector('button#adc')
botaoAdicionar.addEventListener('click', adicionar)

const botaoAnalizar = document.querySelector('button#analizar')
botaoAnalizar.addEventListener('click', analisar)

const tab = document.querySelector('select#seltab')

const res = document.querySelector('div#res')

let numeros = []

function adicionar() {
    let txtNum = document.querySelector('input#num')
    if (txtNum.value.length === 0) {
        window.alert('Digite algum número!')
    } else {
        let num = Number(txtNum.value)
        if (num < 1 || num > 100) {
            window.alert('Número deve ser entre 1 e 100!')
            txtNum.value = ''
        } else if (numeros.includes(num)) {
            window.alert('Número já foi adicionado!')
            txtNum.value = ''
        } else {
            numeros.push(num)
            res.innerHTML = ''
            

            let item = document.createElement('option')
            item.text = `Valor ${num} adicionado`
            tab.appendChild(item)
            txtNum.value = ''
            txtNum.focus()

        }
    }
}

function analisar() {
    res.innerText = ''
    console.log(numeros.length)
    if (numeros.length === 0) {
        window.alert('Adicione pelo menos um número para analizar!')
    } else {
        let totalElementos = numeros.length
        let maior
        let menor
        let soma = 0
        let media = 0

        for (let n in numeros) {
            soma += numeros[n]

            if (n == 0) {
                maior = numeros[0]
                menor = numeros[0]
            } else {
                if (numeros[n] > maior) {
                    maior = numeros[n]
                }
                if (numeros[n] < menor) {
                    menor = numeros[n]
                }
            }
        }

        media = soma / totalElementos

    res.innerHTML += `<p>Ao todo, temos ${totalElementos} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>A soma dos valores digitados é ${soma}</p>`
    res.innerHTML += `<p>A média dos valores é ${media.toFixed(2)}.</p>`
    }
}