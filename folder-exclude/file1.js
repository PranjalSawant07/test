// Calculate the total price including tax
function calculateTotal(price, taxRate) {
  const tax = price * taxRate;
  const total = price + tax;
  return total;
}

// Example usage
const price = 100;
const taxRate = 0.18;
const total = calculateTotal(price, taxRate);

console.log(`Price: ₹${price}`);
console.log(`Tax Rate: ${taxRate * 100}%`);
console.log(`Total Amount: ₹${total}`);
