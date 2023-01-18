/*проценты по ипотеке*/
const programBase = 0.12;
const programIt = 0.047;
const programGov = 0.067;
const programZero = 0.108;

// указываем ставку в радио кнопках
document.querySelector('#base-value').value = programBase;
document.querySelector('#it-value').value = programIt;
document.querySelector('#gov-value').value = programGov;
document.querySelector('#zero-value').value = programZero;

//указываем ставку в label
document.querySelector('#base-text').innerText = programBase;
document.querySelector('#it-text').innerText = programIt;
document.querySelector('#gov-text').innerText = programGov;
document.querySelector('#zero-text').innerText = programZero;
