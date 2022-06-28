// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

if (campoSaldo){
    campoSaldo.innerHTML = '0';
} else {
    console.log("O elemento campoSaldo é nulo");
}


function somarAoSaldo(soma: number) {
    if (campoSaldo){
        campoSaldo.innerHTML = String(Number(campoSaldo.innerHTML) + soma);
    } else {
        console.log("O elemento campoSaldo é nulo");
    }
}

function limparSaldo() {
    if (campoSaldo){
        campoSaldo.innerHTML = '0';
    } else {
        console.log("O elemento campoSaldo é nulo");
    }
}

if (botaoAtualizar){
    
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });

}else {
    console.log("O elemento botaoAtualizar é nulo");
}

if (botaoLimpar){
    
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
} else {
    console.log("O elemento botaoLimpar é nulo");
}