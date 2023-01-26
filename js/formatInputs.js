//Инпуты

const inputConst = document.querySelector('#input-cost');
const inputDownPayment = document.querySelector('#input-downpayment');
const inputTerm = document.querySelector('#input-term');


var cleave = new Cleave('#input-cost', {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand'
});