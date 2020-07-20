var num = document.getElementById('numero');
var tab = document.getElementById('var');
var valores = [];
var res = document.getElementById('res');

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, valor) {
    if (valor.indexOf((Number)(n)) == -1) {
        return false;
    } else {
        return true;
    }

}
function adicionar() {

    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor = ${num.value}`;
        tab.appendChild(item);
        res.innerHTML = ' ';
    } else {
        window.alert('A lista já possui esse número, digite outro')
    }
    num.value = '';
    num.focus();
}

function finalizar() {
    var maior = valores[0];
    var menor = valores[0];
    var media = 0;
    var soma = 0;


    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar');
    } else {

        var tot = valores.length;
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo temos ${tot} numeros</p>`

        for (var i = 0; i <= tot; i++) {
            if (valores[i] > maior) {
                maior = Number(valores[i]);
            }
            if (valores[i] < menor) {
                menor = Number(valores[i]);
            }

        }
        for (let pos in valores) {
            soma += valores[pos];
        }
    }
    media = (soma / tot);

    res.innerHTML += `<p> O maior ${maior}</p>`;
    res.innerHTML += `<p> O menor ${menor}</p>`;
    res.innerHTML += `<p> A soma ${soma}</p>`;
    res.innerHTML += `<p> A media ${media}</p>`;
}
