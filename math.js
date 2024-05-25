console.log("this file is untracked:");
console.log("first to run (git add .) command to track this file:");

function add(num1, num2) {
  console.log(num1 + num2);
}

function sub(num1, num2) {
  if (num1 > num2) {
    console.log(num1 - num2);
  } else {
    console.log(num2 - num1);
  }
}

function mul(num1, num2) {
  console.log(num1 * num2);
}

function div(num1, num2) {
  if (num1 > num2) {
    console.log(num1 / num2);
  } else {
    console.log(num2 / num1);
  }
}

module.exports = { add, sub, mul, div };
