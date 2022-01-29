var prompt  = require(`prompt-sync`)();

const nomepeca1 = prompt(`Digite o nome da peça 1: `);
const numpeca1 = +prompt(`Digite o número de peças 1: `);
const valorporpeca1 = +prompt(`Digite o valor por peças 1: `); 

const nomepeca2 = prompt(`Digite o nome da peça 2: `);
const numpeca2 = +prompt(`Digite o número de peças 2: `);
const valorporpeca2 = +prompt(`Digite o valor por peças 2: `);


console.log(`O valor a ser pago pelo`, nomepeca1, `e pelo`, nomepeca2, `é de R$ ${(numpeca1*valorporpeca1)+(numpeca2*valorporpeca2)}`);

