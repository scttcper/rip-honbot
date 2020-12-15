import { generateInsult } from 'kingraveninsults';

const insult = generateInsult(Math.round(Math.random()) ? 'CLASSIC' : 'DEFAULT');
document.querySelector('#insult').innerHTML = insult;