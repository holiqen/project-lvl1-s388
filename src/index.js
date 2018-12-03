import readlineSync from 'readline-sync';

const welcome = (gameDis) => {
  console.log("Welcom to the Brain Games!");
  const name = readlineSync.question('What is your name: ');
  console.log(`Hello, ${name}!`);
  return name;
};
export default welcome;
