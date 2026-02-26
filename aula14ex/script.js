const botao = document.querySelector('button#contar');
const resposta = document.querySelector('div#res');

const paragrafo = document.createElement('p');
paragrafo.setAttribute('id', 'resp');
resposta.appendChild(paragrafo);

botao.addEventListener('click', contar);

function contar() {
    paragrafo.innerText = '';
    
    let inicio = Number(document.querySelector('input#inicio').value);
    let fim = Number(document.querySelector('input#fim').value);
    let passo = Number(document.querySelector('input#passo').value);
    
    if (passo === 0 || !passo) {
        window.alert('Passo 0 é inválido. Iremos considerar PASSO = 1');
        passo = 1;
    }

    if (inicio < fim) {
        
        for (let c = inicio; c <= fim; c += passo) {
            paragrafo.innerText += `${c} ⭢`;
        }
    }
    else {
        window.alert('Para FIM menor que o INÍCIO, o PASSO precisa ser negativo! Vamos considerar -PASSO.');
        for (let c = inicio; c >= fim; c -= passo) {
            paragrafo.innerText += `${c} ⭢`;
        }
    }

    paragrafo.innerText += '🏁';
}