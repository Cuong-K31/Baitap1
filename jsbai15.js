function removeDuplicates(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let trungLap = false;

        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                trungLap = true;
                break;
            }
        }

        if (trungLap === false) {
            result.push(arr[i]);
        }
    }

    return result;
}

document.getElementById("ketqua").innerHTML =
    JSON.stringify(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));