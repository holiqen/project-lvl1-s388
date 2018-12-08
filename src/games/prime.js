import startGame from '..';
import getRandomNumber from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  } return true;
};
const prime = () => {
  const question = getRandomNumber(0, 1000);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => startGame(description, prime);
