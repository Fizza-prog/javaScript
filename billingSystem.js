const names = ["book", "pen", "bag"];
const prices = [500, 50, 1500];
const qty = [2, 10, 1];

function bill(names, prices, qty, code) {
    let total = 0;

    // 1. calculate total
    for (let i = 0; i < names.length; i++) {
        total += prices[i] * qty[i];
    }

    let discount = 0;

    // 2. apply discount rules
    if (code === "SAVE10" && total > 1000) {
        discount = total * 0.10;
    } 
    else if (code === "SAVE20" && total > 2000) {
        discount = total * 0.20;
    }

    let final = total - discount;

    return {
        total,
        discount,
        final
    };
}

console.log(bill(names, prices, qty, "SAVE10"));