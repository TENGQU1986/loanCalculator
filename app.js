// const loanAmt = document.querySelector('#amount');
// const interest = document.querySelector('#interest');
// const years = document.getElementById('years');

// const calculate = document.querySelector('#calculate');

document.querySelector('#loan-form').addEventListener('submit', calculate);

function calculate(e) {
  const amount = document.querySelector('#amount');
  const interest = document.querySelector('#interest');
  const years = document.querySelector('#years');
  const monthlyPayment = document.querySelector('#monthly-payment');
  const totalPayment = document.querySelector('#total-payment');
  const totalInterest = document.querySelector('#total-interest');

  if(amount.value === '' || interest.value === '' || years.value === '') {
    document.querySelector('#warning').textContent = 'Please input valid value';
    document.querySelector('#warning').style.color = 'red';
  } else {
    totalPayment.value = parseFloat(amount.value) * (1 + parseFloat(interest.value / 100));
  }
  
  
  e.preventDefault();
}



// loanAmt.addEventListener('input', getAmount);

// function getAmount(e) {
//   console.log(e.target.value);
//   e.preventDefault();
// }


// const runCalculate = (e) => {
//   console.log(e.target.value);
//   e.preventDefault();
//   };

// calculate.addEventListener('click', runCalculate);




