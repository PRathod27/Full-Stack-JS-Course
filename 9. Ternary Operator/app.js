function passwordChecker(pass) {
  return pass === 8 ? console.log("Pass done") : alert("Pass not done");
}

passwordChecker(2);

// challenge

function checkMoney(money) {
  return money === true
    ? console.log(`Can Buy Products`)
    : alert(`Can't Buy Products`);
}

checkMoney(true);
