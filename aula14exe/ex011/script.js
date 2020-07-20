function tabuada() {
    var numero = document.getElementById('numero');
    var tab = document.getElementById('sel');

    if (numero.value.length == 0) {
        res.innerHTML = 'Insira o valor'
    } else {
        let num = Number(numero.value);
        tab.innerHTML='';
     for (var i = 1; i <= 10; i++) {//contagem crescente
               
        let item = document.createElement('option')
       item.text = `${num} * ${i} = ${i*num}`;
       //adicionnar elemento filho ao tab
       tab.appendChild(item);
            }
       
        }
       
    }
