// The list of the customers (initial queue in front of the ATM)
const customers = [
  { name: "John", balance: 4000 },
  { name: "Amy", balance: 5000 },
  { name: "Tom", balance: 1000 },
  { name: "Lisa", balance: 7000 },
  { name: "Alan", balance: 2000 },
];

// Access the List Element (<ul>) in HTML through its ID
const initialStateList = document.getElementById("initialState");

// Create and add <li> elements under <ul> to show initial balances of the customers
customers.forEach((element) => {
  let unorderedListItem = `
    <li style="list-style-type: square;">
    The initial balance of ${element.name} is ${element.balance} USD.
    </li>
    `;
  initialState.insertAdjacentHTML("beforebegin", unorderedListItem);
});

// Access the List Element (<ol>) in HTML through its ID
const finalStateList = document.getElementById("finalState");

// Create the function which returns the final state of the queue of the customers after the transaction
function getFinalOrder(k = 2000, amounts = customers) {
  var finalOrder = [];

  while (amounts.length !== 0) {
    for (let i = 0; i < amounts.length; i++) {
      let element = amounts[i];
      if (element.balance > k) {
        element.balance = element.balance - k;
        amounts.splice(i, 1);
        amounts.push(element);
      } else if (element.balance <= k && element.balance !== 0) {
        element.balance = element.balance - element.balance;
        finalOrder.push(element);
        amounts.splice(i, 1);
      } else {
        amounts.splice(i, 1);
      }
    }
  }
  console.log(finalOrder);
  // Create and add <li> elements under <ol> to show who left from the queue in order
  return finalOrder.forEach((item) => {
    let orderedListItem = `
      <li style="list-style-type: decimal;">
    ${item.name} has taken all the money and left from the query.
      </li>
      `;
    finalState.insertAdjacentHTML("beforebegin", orderedListItem);
  });
}
