//Инпуты

const inputConst = document.querySelector('#input-cost');
const inputDownPayment = document.querySelector('#input-downpayment');
const inputTerm = document.querySelector('#input-term');

//Cleave опции форматирования

const cleavePriceSetting = {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    delimiter: ' '
};

//Запускаем форматирование Cleave
const cleaveCost = new Cleave(inputConst, cleavePriceSetting);
const cleaveDownPayment = new Cleave(inputDownPayment,cleavePriceSetting);

//Отображение рассчета суммы кредита 
form.addEventListener('input', function () {

    //Сумма кредита

    const totalAmount = +cleaveCost.getRawValue() - cleaveDownPayment.getRawValue();
    console.log(totalAmount);

    totalCost.innerText = totalAmount;

    
})