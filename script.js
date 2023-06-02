const button = document.getElementById('button');
const name = document.getElementById('name');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const resultado = document.getElementById('resultado');

const getText = (imc) => {
    if (imc > 40) {
        return 'Obesidade grau III'
    }

    if (imc > 35) {
        return 'Obesidade grau II'
    }

    if (imc > 30) {
        return 'Obesidade grau I'
    }

    if (imc > 25) {
        return 'Levemente acima do Peso'
    }

    if (imc > 18.5) {
        return 'Peso ideal'
    }

    else {
        return 'Abaixo do peso'
    }

}

const imcCalc = () => {
    if (!peso.value || !altura.value || !name.value) {
        return resultado.textContent = 'Prencha os campos vazios.';
    }
    
    const valorImc = (+peso.value / (+altura.value * +altura.value)).toFixed(1);
    resultado.textContent = `${name.value} = ${getText(valorImc)}`;
}

button.addEventListener('click', imcCalc)
