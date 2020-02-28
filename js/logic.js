function isPalindrome(str) {
  str = str.replace(/\W/g, "").toLowerCase();
  return (
    str ==
    str
      .split("")
      .reverse()
      .join("")
  );
}

//-------------------------
var fibonacci_series = function(n) {
  if (n === 1) {
    return [0, 1];
  } else {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

console.log(fibonacci_series(8));

//-------------------------
sum(2, 3);

function sum(num1, num2) {
  console.log(num1 + num2);
}

sum(2)(3);
function sum(num1) {
  return function(num2) {
    console.log("sum()()---> ", num1 + num2);
  };
}

function sum(num1) {
  if (arguments.length > 2) {
  } else {
    return function(num2) {
      console.log("sum()()---> ", num1 + num2);
    };
  }
}

//-------------------------
for (var i = 0; i < 5; i++) {
  var btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Button " + i));
  btn.addEventListener("click", function() {
    console.log(i);
  });
  document.body.appendChild(btn);
}

//-------------
var array = [1, 2, 3, 4, 5];
console.log("1. array : ", array);

console.log(Math.max(4, 5, 1, 3)); // logs 5
var num = [4, 5, 1, 3];
console.log(Math.max(num)); // logs NaN
var num = [4, 5, 1, 3];
console.log(Math.max.apply(null, num)); // logs 5  -- Use of APPLY

// Random number Min - Max
function randomInteger(minNum, maxNum) {
  return minNum + Math.floor(Math.random() * maxNum);
}

//Capitalize LastLetter of words in string
const capLast = str => str.replace(/\w\b/g, match => match.toUpperCase());
function capLast2(txt) {
  return txt.replace(
    /\w{1,}/g,
    word => word.slice(0, -1) + word.charAt(word.length - 1).toUpperCase()
  );
}
