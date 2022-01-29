var prompt  = require(`prompt-sync`)();

const ano = +prompt(`Digite os anos vividos pela pessoa: `);
const mes = +prompt(`Digite os meses vividos pela pessoa: `);
const dia = +prompt(`Digite os dias vividos pela pessoa: `);

console.log(`O total de dias vividos pela pessoa foram de: ${ano*365+mes*30+dia} dias.`);