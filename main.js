// input
const dateInput = document.getElementById("date");
const monthsInput = document.getElementById("months");
const yearsInput = document.getElementById("years");

// output
const yearOutput = document.getElementById("yy");
const monthOutput = document.getElementById("mm");
const dateOutput = document.getElementById("dd");

// form
const form = document.querySelector("form");

// submit button
form.onsubmit = handleSubmit;

// input error massage
const error = document.getElementById("error-massage");

const currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();

const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;

  inputs.forEach((number) => {
    const parent = number.parentElement;
    if (!number.value) {
      number.style.borderColor = "red";
      error.style.color = "red";
      parent.querySelector("span").innerText = "This field is required";
      validator = false;
    } else {
      number.style.borderColor = "black";
      parent.querySelector("span").innerText = "";
    }
  });

  if (monthsInput.value > 12 || monthsInput.value < 1) {
    monthsInput.style.borderColor = "red";
    monthsInput.parentElement.querySelector("span").innerText = "Must be a valid Month";
    error.style.color = "red";
    validator = false;
  }

  if (dateInput.value > 31 || dateInput.value < 1) {
    dateInput.style.borderColor = "red";
    dateInput.parentElement.querySelector("span").innerText = "Must be a valid date";
    error.style.color = "red";
    validator = false;
  }

  return validator;
}

function handleSubmit(element) {
  element.preventDefault();

  if (validate()) {
    const enteredDay = parseInt(dateInput.value);
    const enteredMonth = parseInt(monthsInput.value);
    const enteredYear = parseInt(yearsInput.value);

    let d = currentDay - enteredDay;
    let m = currentMonth - enteredMonth;
    let y = currentYear - enteredYear;

    if (d < 0) {
      m -= 1;
      d += monthLengths[currentMonth - 2];
    }

    if (m < 0) {
      y -= 1;
      m += 12;
    }

    dateOutput.innerHTML = d;
    monthOutput.innerHTML = m;
    yearOutput.innerHTML = y;
  }
}
