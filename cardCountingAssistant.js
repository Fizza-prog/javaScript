let count = 0;

function cardCounter(card) {

    // 1. update count based on card value
    if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
        count++;
    } 
    else if (card === 7 || card === 8 || card === 9) {
        count = count;
    } 
    else {
        // 10, J, Q, K, A
        count--;
    }

    // 2. decide Bet or Hold
    let decision = count > 0 ? "Bet" : "Hold";

    // 3. return formatted string
    return count + " " + decision;
}