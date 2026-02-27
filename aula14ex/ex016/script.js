const botao = document.querySelector('button#contar');
const resposta = document.querySelector('div#res');

const paragrafo = document.createElement('p');
paragrafo.setAttribute('id', 'resp');
resposta.appendChild(paragrafo);

botao.addEventListener('click', contar);

function contar() {
    paragrafo.innerText = 'Contando:';
    
    let ini = document.querySelector('input#inicio');
    let fim = document.querySelector('input#fim');
    let passo = document.querySelector('input#passo');

    if (ini.value.length === 0 || fim.value.length === 0 || passo.value.length === 0) {
        window.alert('[ERRO] Coloque todos os valores');
        paragrafo.innerText = 'Impossível contar.'
    } else {
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value)
        
        if (p === 0) {
            window.alert('Passo 0 é inválido. Iremos considerar PASSO = 1');
            passo = 1;
    }
        if (i < f) {   
            for (let c = i; c <= f; c += p) {
                paragrafo.innerText += `${c} ⭢`;
            }
        } else {
                window.alert('Para FIM menor que o INÍCIO, o PASSO precisa ser negativo! Vamos considerar -PASSO.');
                for (let c = i; c >= f; c -= p) {
                    paragrafo.innerText += `${c} ⭢`;
            }
        }
    }
    
    

    paragrafo.innerText += '🏁';
}