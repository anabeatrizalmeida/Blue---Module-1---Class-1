var prompt  = require(`prompt-sync`)();

const notaA = +prompt(`Digite a primeira nota: `); 
const notaB = +prompt(`Digite a segunda nota: `);

console.log(`A média do aluno é: ${(notaA*4 + notaB*6)/10}`);
