var prompt  = require(`prompt-sync`)();

const dias = +prompt(`Digite os dias vividos pela pessoa: `);

const ano = Math.trunc(dias/365);
const mes = Math.trunc((dias%365)/30);
const dia = mes%30;

console.log(`A pessoa viveu`, ano, `anos`, mes, `meses e`, dia, `dias.`);