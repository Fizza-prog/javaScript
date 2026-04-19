/*
====================================================
Build a Cargo Manifest Validator
Correct Solution + Comments on likely mistakes
====================================================
*/

const cargoManifest = {
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false
};

/*
====================================================
1. normalizeUnits(manifest)
====================================================

Goal:
- Do NOT change original object
- Return NEW object
- If lb -> convert to kg
- If already kg -> keep same

Common mistakes you made:
❌ Returning only {w,u}
❌ Passing manifest.weight instead of full object
❌ Mutating original object directly
❌ Forgetting to return full manifest shape
*/

function normalizeUnits(manifest) {

  // Copy object so original remains unchanged
  let newManifest = { ...manifest };

  if (newManifest.unit === "lb") {

    // Convert pounds to kilograms
    newManifest.weight = newManifest.weight * 0.45;

    // Update unit
    newManifest.unit = "kg";
  }

  // If already kg, no change needed

  return newManifest;
}

/*
====================================================
2. validateManifest(manifest)
====================================================

Goal:
Return {} if valid

Else return:
{
  propertyName: "Missing"
}
or
{
  propertyName: "Invalid"
}

Common mistakes you made:
❌ manifest.weight === NaN   (always false)
❌ destination === " " only checks one space
❌ Returning cid,d,w,u,h instead of real property names
❌ Checking only one condition
❌ Returning truthy object then using if(object)
*/

function validateManifest(manifest) {

  let errors = {};

  /*
  -----------------------------------------
  containerId checks
  Must exist
  Must be positive integer
  -----------------------------------------
  */

  if (!manifest.hasOwnProperty("containerId")) {
    errors.containerId = "Missing";
  }
  else if (
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = "Invalid";
  }

  /*
  -----------------------------------------
  destination checks
  Must exist
  Must be string
  Must not be empty after trim
  -----------------------------------------
  */

  if (!manifest.hasOwnProperty("destination")) {
    errors.destination = "Missing";
  }
  else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  /*
  -----------------------------------------
  weight checks
  Must exist
  Must be number
  Must be > 0
  Must not be NaN
  -----------------------------------------
  */

  if (!manifest.hasOwnProperty("weight")) {
    errors.weight = "Missing";
  }
  else if (
    typeof manifest.weight !== "number" ||
    manifest.weight <= 0 ||
    Number.isNaN(manifest.weight)
  ) {
    errors.weight = "Invalid";
  }

  /*
  -----------------------------------------
  unit checks
  Must exist
  Must be kg or lb
  -----------------------------------------
  */

  if (!manifest.hasOwnProperty("unit")) {
    errors.unit = "Missing";
  }
  else if (
    manifest.unit !== "kg" &&
    manifest.unit !== "lb"
  ) {
    errors.unit = "Invalid";
  }

  /*
  -----------------------------------------
  hazmat checks
  Must exist
  Must be boolean
  -----------------------------------------
  */

  if (!manifest.hasOwnProperty("hazmat")) {
    errors.hazmat = "Missing";
  }
  else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

/*
====================================================
3. processManifest(manifest)
====================================================

Goal:

If valid:
console.log("Validation success: id")
console.log("Total weight: X kg")

If invalid:
console.log("Validation error: id")
console.log(errorsObject)

Common mistakes you made:
❌ if(validateManifest(manifest))
   (object is always truthy)

❌ one console.log for everything

❌ normalizeUnits(manifest.weight)

❌ no spacing in string

❌ not checking if errors object is empty
*/

function processManifest(manifest) {

  let errors = validateManifest(manifest);

  // If no errors
  if (Object.keys(errors).length === 0) {

    console.log("Validation success: " + manifest.containerId);

    let normalized = normalizeUnits(manifest);

    console.log("Total weight: " + normalized.weight + " kg");
  }

  // If errors exist
  else {

    console.log("Validation error: " + manifest.containerId);

    console.log(errors);
  }
}

/*
====================================================
Testing
====================================================
*/

processManifest(cargoManifest);

/*
Expected:

Validation success: 1
Total weight: 373.95 kg
*/