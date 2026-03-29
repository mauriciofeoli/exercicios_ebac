let soma = 0;

for (let numero = 1; numero < 100; numero = numero + 1) {
  if (numero % 5 === 0 || numero % 7 === 0) {
    soma = soma + numero;
  }
}

console.log("Soma:", soma);
