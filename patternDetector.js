const messages = [
  "hello world",
  "JAVASCRIPT is fun",
  "   spaces   everywhere   ",
  "coding123",
  "hello hello hello"
];

function process(messages) {
    let cleaned = [];
    let filtered = [];
    let helloCount = 0;

    for (let i = 0; i < messages.length; i++) {
        let msg = messages[i].trim().toLowerCase();

        cleaned.push(msg);

    
        let words = msg.split(" ");

        for (let j = 0; j < words.length; j++) {
            if (words[j] === "hello") {
                helloCount++;
            }
        }
        
        let hasDigit = /\d/.test(msg);

        if (msg.length > 10 || hasDigit) {
            filtered.push(msg);
        }
    }

    return {
        cleaned,
        filtered,
        helloCount
    };
}

console.log(process(messages));