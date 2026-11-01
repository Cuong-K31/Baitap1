function alternateSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            sum += arr[i];
        } else {
            sum -= arr[i];
        }
    }

    return sum;
}

document.getElementById("ketqua").innerHTML =
    alternateSum([10, 5, 6, 3]);