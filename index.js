const calculateTax=function name(amount) {
   return amount/10
}
function convertToUpperCase(text) {
  return text.toUpperCase();
}




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };