const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
  title: document.querySelector('h1'),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let intervalId = null;

refs.stopBtn.disabled = true;
refs.startBtn.style.cursor = 'pointer';

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeColor = () => {
  intervalId = setInterval(() => {
    const randomInd = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = colors[randomInd];
    if (randomInd === 0) {
      refs.title.style.color = 'black';
    } else {
      refs.title.style.color = 'white';
    }
  }, 1000);
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  refs.startBtn.style.cursor = '';
  refs.stopBtn.style.cursor = 'pointer';
};

const stopChangeColor = () => {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  refs.startBtn.style.cursor = 'pointer';
  refs.stopBtn.style.cursor = '';
};

refs.startBtn.addEventListener('click', changeColor);
refs.stopBtn.addEventListener('click', stopChangeColor);
