/*
function moneyBox(coins) {
  let saveCoins = 0;
  saveCoins += coins;

  console.log(`MoneyBox: $${saveCoins}`)
}

moneyBox(5);
moneyBox(15);
moneyBox(35);

  Cada vez que llamamos a la funcion resetea la variable por lo cual 
  no acumula el valor
*/


function moneyBox() {
  let saveCoins = 0;

  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`)
  }
  return countCoins;
}

const myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(5);

const myMoneyBoxAna = moneyBox();

myMoneyBoxAna(2);
myMoneyBoxAna(2);
myMoneyBoxAna(2);