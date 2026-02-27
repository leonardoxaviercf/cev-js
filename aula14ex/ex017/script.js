const botao = document.querySelector('button#gerar');
botao.addEventListener('click', gerarTabuada);

function gerarTabuada() {
    res.innerHTML = ''
    let txtNum = document.querySelector('input#num');
    let tab = document.querySelector('select#seltab')

    if (txtNum.value.length === 0) {
        window.alert('Digite algum número!')
    } else {
        let num = Number(txtNum.value)

        tab.innerHTML = ''

        for (let c = 1; c <= 10; c++) {
            let calculo = num * c;

            let item = document.createElement('option');
            item.text = `${num} X ${c} = ${calculo}`;
            item.value = `tab${c}`
            tab.appendChild(item);
        }
    txtNum = '';
    }
}