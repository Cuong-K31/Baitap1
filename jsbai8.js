function countGreaterThan(arr, value) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            count++;
        }
    }

    return count;
}

document.getElementById("ketqua").innerHTML =
    countGreaterThan([1, 5, 7, 2, 3], 3);