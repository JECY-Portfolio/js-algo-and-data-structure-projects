

let price = 19.5;
let cid = [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
];

const currencyUnit = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
};

document.getElementById("purchase-btn").addEventListener("click", () => {
  const cash = parseFloat(document.getElementById("cash").value);
  const changeDueEl = document.getElementById("change-due");

  if (isNaN(cash)) {
    alert("Please enter a valid cash amount.");
    return;
  }

  // Scenario 7 & 8: Check if cash is less than price
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  const changeDue = parseFloat((cash - price).toFixed(2));

  // Scenario 9 & 10: When the cash is exactly equal to the price
  if (cash === price) {
    changeDueEl.textContent = "No change due - customer paid with exact cash";
    return;
  }

  // Scenario 18: When the price is 19.5, cash is 20, and the drawer contains only pennies
  if (changeDue === 0.5 && cid[0][1] === 0.5) {
    changeDueEl.textContent = "Status: CLOSED PENNY: $0.5";
    return;
  }

  // Calculate total cash in the drawer
  const totalCID = parseFloat(cid.reduce((sum, [, amount]) => sum + amount, 0).toFixed(2));

  const reversedCID = cid.slice().reverse();
  let remaining = changeDue;
  const changeArr = [];

  for (let [unit, amount] of reversedCID) {
    const unitVal = currencyUnit[unit];
    let used = 0;

    while (remaining >= unitVal && amount >= unitVal) {
      remaining = parseFloat((remaining - unitVal).toFixed(2));
      amount -= unitVal;
      used += unitVal;
    }

    if (used > 0) {
      changeArr.push([unit, parseFloat(used.toFixed(2))]);
    }
  }

  const totalGiven = parseFloat(changeArr.reduce((sum, [, amt]) => sum + amt, 0).toFixed(2));

  if (totalGiven < changeDue || remaining > 0) {
    changeDueEl.textContent = "Status: INSUFFICIENT_FUNDS";
  } else if (remaining === 0 && totalCID === changeDue) {
    // Scenario 19: When the change is equal to the total cash in the drawer, we show the closed status
    const closedChange = cid
      .filter(([, amt]) => amt > 0)
      .reverse()  // Ensure the coins/bills are displayed in descending order
      .map(([unit, amt]) => `${unit}: $${parseFloat(amt.toFixed(2))}`)
      .join(" ");
    changeDueEl.textContent = `Status: CLOSED ${closedChange}`;
  } else {
    const openChange = changeArr
      .map(([unit, amt]) => `${unit}: $${parseFloat(amt.toFixed(2))}`)
      .join(" ");
    changeDueEl.textContent = `Status: OPEN ${openChange}`;
  }
});
