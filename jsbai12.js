function findLongestWord(arr) {
    if (arr.length === 0) {
        return "";
    }

    let longest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }

    return longest;
}

document.getElementById("ketqua").innerHTML =
    findLongestWord(["apple", "banana", "cherry", "date"]);