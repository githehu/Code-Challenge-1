const prompt = require("prompt-sync")()

function calculateChaiIngredients() {
  // Prompt user for the number of cups
  let input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
  
  // Convert input to a number
  let numberOfCups = parseInt(input);

  // Validate the input
  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log("Please enter a valid positive number of cups.");
    return;
  }

  // Standard ingredient quantities per cup
  const waterPerCup = 200; // ml
  const milkPerCup = 50;   // ml
  const teaLeavesPerCup = 1; // tablespoon
  const sugarPerCup = 2;   // teaspoons

  // Calculate totals
  const totalWater = waterPerCup * numberOfCups;
  const totalMilk = milkPerCup * numberOfCups;
  const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
  const totalSugar = sugarPerCup * numberOfCups;

  // Output the result
  console.log(`To make ${numberOfCups} cup(s) of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoon(s)`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoon(s)`);
  console.log("\nEnjoy your Chai Bora!");
}

// Call the function
calculateChaiIngredients();