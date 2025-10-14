/*Categoria de Nadador

Descrição: Com base na idade fornecida, classifique o nadador em uma das seguintes categorias:

Infantil: até 10 anos
Juvenil: 11 a 17 anos
Adulto: 18 anos ou mais
Exemplo de Entrada/Saída:

Digite a idade do nadador: 15
Categoria: Juvenil */
let idade: number = 15; // Idade do nadador
let categoria: string; // Variável para armazenar a categoria do nadador
if (idade <= 10) {
  categoria = "Infantil"; // Categoria Infantil para idades até 10 anos
} else if (idade <= 17) {
  categoria = "Juvenil"; // Categoria Juvenil para idades de 11 a 17 anos
} else {
  categoria = "Adulto"; // Categoria Adulto para idades de 18 anos ou mais
}
console.log(`Categoria: ${categoria}`); // Exibição da categoria do nadador
