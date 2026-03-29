let numeros = [12, 7, 25, 3, 18];

let maior = numeros[0];
let menor = numeros[0];

for (let i = 1; i < numeros.length; i = i + 1) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
  if (numeros[i] < menor) {
    menor = numeros[i];
  }
}

console.log("Maior:", maior);
console.log("Menor:", menor);
