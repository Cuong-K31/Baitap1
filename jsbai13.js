function calculateGrade(arr) {
    if (arr.length === 0) {
        return "Khong co diem";
    }

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let average = sum / arr.length;

    if (average >= 90) {
        return "A";
    } else if (average >= 80) {
        return "B";
    } else if (average >= 70) {
        return "C";
    } else if (average >= 60) {
        return "D";
    } else {
        return "F";
    }
}

document.getElementById("ketqua").innerHTML =
    calculateGrade([90, 85, 95, 80]);