import readlineSync from 'readline-sync';

const countQuest = 3;

const welcome = 'Welcome to the Brain Games!';

const startGame = (description, makeGame) => {
  console.log(welcome);
  console.log(description);
  const name = readlineSync.question('What is your name: ');
  console.log(`Hello, ${name}!`);

  for (let i = 1; i <= countQuest; i += 1) {
    const { question, correctAnswer } = makeGame();
    console.log('Question: ', question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};


export default startGame;
