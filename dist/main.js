"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const calculateButton = document.getElementById("calculateBtn");
    const resultDiv = document.getElementById("result");
    calculateButton.addEventListener("click", function () {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);
        if (isNaN(weight) || isNaN(height)||weight<=0||height<=0) {
            resultDiv.textContent = "لطفا مقادیر معتبر قد و وزن خود را وارد نمایید!";
            return;
        }
        const bmi = calculateBMI(weight, height);
        const category = getBMICategory(bmi);
        resultDiv.textContent = `نتیجه تست شما : ${bmi.toFixed(2)} (${category})`;
    });
    function calculateBMI(weight, height) {
        const heightInMeters = height / 100; // Convert height from centimeters to meters
        const bmi = weight / (heightInMeters * heightInMeters);
        return bmi;
    }
    function getBMICategory(bmi) {
        if (bmi < 18.5) {
            return "کمبود وزن";
        }
        else if (bmi >= 18.5 && bmi < 25) {
            return "وزن سلامت";
        }
        else if (bmi >= 25 && bmi < 30) {
            return " اضافه وزن";
        }
        else {
            return "چاقی";
        }
    }
});
