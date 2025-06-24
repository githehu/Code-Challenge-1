const prompt = require('prompt-sync')()



function calculateBodaFare() {
  // Prompt the user to enter the distance
  let input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");

  // Convert the input to a number
  let distanceInKm = parseFloat(input);

  // Validate the input
  if (isNaN(distanceInKm) || distanceInKm <= 0) {
    console.log("Tafadhali andika nambari sahihi ya kilomita.");
    return;
  }

  // Fare calculation parameters
  const baseFare = 50;       // KES
  const chargePerKm = 15;    // KES per kilometer

  // Calculate components
  const travelFare = distanceInKm * chargePerKm;
  const totalFare = baseFare + travelFare;

  // Output the fare breakdown
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${travelFare}`);
  console.log(`Total: KES ${totalFare}\n`);
  console.log("Panda Pikipiki!");
}

// Call the function
calculateBodaFare();