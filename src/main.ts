import { isString } from "../node_modules/cypress/types/lodash/index";

document.addEventListener("DOMContentLoaded", function() {
  const weightInput = document.getElementById("weight") as HTMLInputElement;
  const heightInput = document.getElementById("height") as HTMLInputElement;
  const calculateButton = document.getElementById("calculateBtn") as HTMLButtonElement;
  const resultDiv = document.getElementById("result") as HTMLInputElement;

  calculateButton.addEventListener("click", function() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

  if (isNaN(weight) || isNaN(height) ||weight<=0 || height<=0) {
      resultDiv.textContent = "لطفا مقادیر معتبر قد و وزن خود را وارد نمایید!";
      return;
    }
  
  

    const bmi = calculateBMI(weight, height);
    const category = getBMICategory(bmi);

    resultDiv.textContent = `نتیجه تست شما : ${bmi} (${category})`;
  });

  function calculateBMI(weight: number, height: number): number {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi;
  }

  function getBMICategory(bmi: number): string {
    if (bmi < 18.5 ) {
      return "کمبود وزن";
    }

     else if (bmi >= 18.5 && bmi < 25) {
      return "وزن سلامت";
    } else if (bmi >= 25 && bmi < 30) {
      return " اضافه وزن";
    } else {
      return "چاقی";
    }
  }
});