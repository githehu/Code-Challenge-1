const prompt = require("prompt-sync")();

function estimateTransactionFee() {
  // Prompt the user to enter the amount
  let input = prompt("Unatuma Ngapi? (KES):");

  // Convert the input to a number
  let amountToSend = parseFloat(input);

  // Validate input
  if (isNaN(amountToSend) || amountToSend <= 0) {
    console.log("Tafadhali andika kiasi sahihi cha kutuma.");
    return;
  }

  // Fee calculation constants
  const feeRate = 0.015;    // 1.5%
  const minFee = 10;
  const maxFee = 70;

  // Calculate the raw fee
  let calculatedFee = amountToSend * feeRate;

  // Apply min and max bounds
  if (calculatedFee < minFee) {
    calculatedFee = minFee;
  } else if (calculatedFee > maxFee) {
    calculatedFee = maxFee;
  }

  // Calculate total amount to be debited
  const totalDebited = amountToSend + calculatedFee;

  // Output the results
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}`);
  console.log("\nSend Money Securely!");
}

// Call the function
estimateTransactionFee();