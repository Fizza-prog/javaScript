let lunches = [];

// 1. Add to end
function addLunchToEnd(arr, item) {
    arr.push(item);
    console.log(`${item} added to the end of the lunch menu.`);
    return arr;
}

// 2. Add to start
function addLunchToStart(arr, item) {
    arr.unshift(item);
    console.log(`${item} added to the start of the lunch menu.`);
    return arr;
}

// 3. Remove last
function removeLastLunch(arr) {
    if (arr.length === 0) {
        console.log("No lunches to remove.");
        return arr;
    }

    let removed = arr.pop();
    console.log(`${removed} removed from the end of the lunch menu.`);
    return arr;
}

// 4. Remove first
function removeFirstLunch(arr) {
    if (arr.length === 0) {
        console.log("No lunches to remove.");
        return arr;
    }

    let removed = arr.shift();
    console.log(`${removed} removed from the start of the lunch menu.`);
    return arr;
}

// 5. Random lunch
function getRandomLunch(arr) {
    if (arr.length === 0) {
        console.log("No lunches available.");
        return;
    }

    let index = Math.floor(Math.random() * arr.length);
    console.log(`Randomly selected lunch: ${arr[index]}`);
}

// 6. Show menu
function showLunchMenu(arr) {
    if (arr.length === 0) {
        console.log("The menu is empty.");
        return;
    }

    console.log("Menu items: " + arr.join(", "));
}