//storing a person name in a variable
var personname = "akhlaque ahmed";
//printing a person name in a lowercase
console.log(personname.toLowerCase());
//printing a person name in a uppercase
console.log(personname.toUpperCase());
//printing a person name in titlecase
console.log(personname.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
