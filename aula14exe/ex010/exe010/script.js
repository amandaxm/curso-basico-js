function contar() {
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');
    var res = document.getElementById('res');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar'
    } else {
        res.innerHTML='Contando <br>'
        let ini = Number(inicio.value);
        let fi = Number(fim.value);
        let pas = Number(passo.value);
        if(pas<=0){
            window.alert('Passo inválido, considerado passo 1');
            pas=1;
        }
        if (ini < fi) {
            for (var i = ini; i <= fi; i = i + pas) {//contagem crescente
                res.innerText += ` ${i} \u{1F449}`;
            }
        } else {
            for (var i = ini; i >= fi; i = i - pas) {//contagem descrescente
                res.innerText += ` ${i} \u{1F449}`;
            }

        }
        res.innerHTML += '\u{1F3C1}'
    }
}