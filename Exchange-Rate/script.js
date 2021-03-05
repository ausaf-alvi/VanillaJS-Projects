const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

//api key generated for appecommerce173@gmail.com
//api website: exchangerate-api.com
// eg:https://v6.exchangerate-api.com/v6/{api_key}/latest/USD
const api_key = '8a95c663ee12e2e129f705ca';


//Fetch Exchange rates and update the DOM
function calculate(){
    // console.log("works")
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    // console.log(currency_one);
    // console.log(currency_two);
    
    fetch(`https://v6.exchangerate-api.com/v6/${api_key}/latest/${currency_one}`)
        .then(res => res.json() )
        .then(data => {
            // console.log(data);
            const rate = data.conversion_rates[currency_two];
            console.log(rate);
            
            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

            amountEl_two.value = (+amountEl_one.value*rate).toFixed(2);

        });
}

//Event Listeners
currencyEl_one.addEventListener('change',calculate);
currencyEl_two.addEventListener('change',calculate);
amountEl_one.addEventListener('input',calculate);
amountEl_two.addEventListener('input',calculate);
swap.addEventListener('click',() => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
})



calculate();
