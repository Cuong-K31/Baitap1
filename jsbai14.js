function findMissingNumber(arr, n) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let total = n * (n + 1) / 2;

    return total - sum;
}

document.getElementById("ketqua").innerHTML =
    findMissingNumber([1, 2, 4, 5, 6], 6);