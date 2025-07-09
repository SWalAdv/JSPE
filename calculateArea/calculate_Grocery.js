let grocery_amount_1;
let grocery_amount_2;
let grocery_amount_3;

function calculateGrocery() 
{
  grocery_amount_1 = parseFloat(document.getElementById('grocery_amount_1').value);
  grocery_amount_2 = parseFloat(document.getElementById('grocery_amount_2').value);
  grocery_amount_3 = parseFloat(document.getElementById('grocery_amount_3').value);

  let total_amount = grocery_amount_1 + grocery_amount_2 + grocery_amount_3;

   document.getElementById('result').innerText = `The amount of the grocery is: ${total_amount}`;
}
