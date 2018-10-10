const PHONE_PRICE=99.99;
const ACCESSORIES_PRICE=9.99;
let bankBalance = 303.91;
const TAX_PERCENT = 8;
const SPENDING_THRESHOLD = 200;

function calculateTotalPrice() {
		let phonePurchaseAmount = 0;
		let accessoriesTotal = 0;
		while(phonePurchaseAmount <= bankBalance) {
				// Buy phone
				phonePurchaseAmount = phonePurchaseAmount + PHONE_PRICE;			
			
				// Buy accessories
				while(accessoriesTotal <= SPENDING_THRESHOLD) {
					accessoriesTotal = accessoriesTotal + ACCESSORIES_PRICE;
				}
			
				phonePurchaseAmount = phonePurchaseAmount + accessoriesTotal;
		}

		const totalPrice = phonePurchaseAmount + calculateTax(phonePurchaseAmount);
		return totalPrice;
}

function calculateTax(purchaseAmount) {
	return purchaseAmount * (TAX_PERCENT / 100);
}

console.log("$" + calculateTotalPrice().toFixed(2));



