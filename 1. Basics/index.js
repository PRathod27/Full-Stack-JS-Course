let firstName = "Prem";
let lastName = "Rathod";

let fullName = firstName.concat(lastName);
console.log(fullName); // PremRathod

// 2. Append
fullName += " is a Software Engineer";
console.log(fullName);

// 3. Length
console.log(fullName.length);

// 4. Cases
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

// 5. Slice
console.log(fullName.slice(0, 4));

// 6. Split
console.log(fullName.split(" ").join("-"));

// 7. Includes
console.log(fullName.includes("Software")); // true

// 8. Trim
console.log(firstName.trim());
