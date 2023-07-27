//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverseString (text){
    let reverse = "";
    for(const letter of text){
      reverse = letter + reverse;
    }
    return reverse;
}
const reversed = reverseString("Hello World");
console.log(reversed);

//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

 function sumOfPositiveNumber (numbers){
          let sum = 0;
          for(const num of numbers){
            if(num > 0){
                sum = sum + num;
            }
          }
          return sum;
 }
 const total = sumOfPositiveNumber([2, -5, 10, -3, 7]);
 console.log(total);

 //Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

 function findMostFrequentElement(arr) {
  const frequency = {};
 
  arr.forEach(element => {
    if (frequency[element]) {
      frequency[element]++;
    } else {
      frequency[element] = 1;
    }
  });
  let mostFrequentElement;
  let maxFrequency = 0;

  for (const element in frequency) {
    if (frequency[element] > maxFrequency) {
      maxFrequency = frequency[element];
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}

const arr =  [3, 5, 2, 5, 3, 3, 1, 4, 5];
console.log(findMostFrequentElement(arr));

//Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTwoNumbersWithSum(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left < right) {
    const sum = sortedArray[left] + sortedArray[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}
const sortedArray = [1, 3, 6, 8, 11, 15];
const target = 9;
console.log(findTwoNumbersWithSum(sortedArray, target));

//Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculate(num1, operator, num2) {
  const parsedNum1 = parseFloat(num1);
  const parsedNum2 = parseFloat(num2);

  if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
    return 'Please enter valid numbers.';
  }

  let result;
  if (operator === '+') {
    result = parsedNum1 + parsedNum2;
  } else if (operator === '-') {
    result = parsedNum1 - parsedNum2;
  } else if (operator === '*') {
    result = parsedNum1 * parsedNum2;
  } else if (operator === '/') {
    if (parsedNum2 === 0) {
      return 'Division by zero is not allowed.';
    }
    result = parsedNum1 / parsedNum2;
  } else {
    return 'Invalid operator. Please use +, -, *, or /.';
  }

  return result;
}

console.log(calculate(5, '+', 3)); 
console.log(calculate(10, '/', 2)); 


//Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const generateRandomPassword = (length) => {
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numericChars = '0123456789';
  const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

  const allChars = uppercaseChars + lowercaseChars + numericChars + specialChars;

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  return password;
};

const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);

//Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanToInt = (roman) => {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    const currentNum = romanNumerals[roman[i]];
    const nextNum = romanNumerals[roman[i + 1]];

    if (nextNum > currentNum) {
      result += nextNum - currentNum;
      i++;
    } else {
      result += currentNum;
    }
  }

  return result;
};

console.log(romanToInt("III")); 
console.log(romanToInt("IV")); 

//Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const findSecondSmallest = (arr) => {
  if (arr.length < 2) {
    console.log('Array should have at least two elements.');
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  if (secondSmallest === Infinity) {
    console.log('There is no second smallest element in the array.');
  }

  return secondSmallest;
};

const array1 = [4, 3, 7, 1, 2, 5, 6];
console.log(findSecondSmallest(array1)); 

