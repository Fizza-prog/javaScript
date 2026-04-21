function groupItems(array) {
    let freq = {};

    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        if (freq[item]) {
            freq[item]++;
        } else {
            freq[item] = 1;
        }
    }

    return freq;
}