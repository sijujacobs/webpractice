function outer() {
  var arr = [];
  for (var i = 0; i < 4; i++) {
    arr[i] = function() {
      return i;
    };
  }
  return arr;
}

var get_arr = outer();

console.log(get_arr[0]()); //4
console.log(get_arr[1]()); //4
console.log(get_arr[2]()); //4
console.log(get_arr[3]()); //4

//---------------

function outer1() {
  var arr = [];
  function closureFunction(val) {
    return function() {
      return val;
    };
  }
  for (var i = 0; i < 4; i++) {
    arr[i] = closureFunction(i);
  }
  return arr;
}
// var getArr = outer1();
// console.log(getArr[0]()); //0
// console.log(getArr[1]()); //1
// console.log(getArr[2]()); //2
// console.log(getArr[3]()); //3
// function apiConnect(apiKey) {
//   function get(route) {
//     return fetch(`${route}?key=${apiKey}`);
//   }
//   function post(route, params) {
//     return fetch(route, {
//       method: "POST",
//       body: JSON.stringify(params),
//       headers: {
//         Authorization: `Bearer ${apiKey}`
//       }
//     });
//   }
//   return { get, post };
// }
// const api = apiConnect("my-secret-key"); // No need to include the apiKey anymore
// api.get("http://www.example.com/get-endpoint");
// api.post("http://www.example.com/post-endpoint", { name: "Joe" });

//------------------
function celebrityID() {
  var celebrityID = 999;
  // We are returning an object with some inner functions
  // All the inner functions have access to the outer function's variables
  return {
    getID: function() {
      // This inner function will return the UPDATED celebrityID variable
      // It will return the current value of celebrityID, even after the changeTheID function changes it
      return celebrityID;
    },
    setID: function(theNewID) {
      // This inner function will change the outer function's variable anytime
      celebrityID = theNewID;
    }
  };
}

// var mjID = celebrityID(); // At this juncture, the celebrityID outer function has returned.
// mjID.getID(); // 999
// mjID.setID(567); // Changes the outer function's variable
// mjID.getID(); // 567: It returns the updated celebrityId variable

//----------------- Closure Bug fix by using IIFE

function celebrityIDCreator(theCelebrities) {
  var i;
  var uniqueID = 100;
  for (i = 0; i < theCelebrities.length; i++) {
    theCelebrities[i]["id"] = (function(j) {
      // the j parametric variable is the i passed in on invocation of this IIFE
      return (function() {
        return uniqueID + j; // each iteration of the for loop passes the current value of i into this IIFE and it saves the correct value to the array
      })(); // BY adding () at the end of this function, we are executing it immediately and returning just the value of uniqueID + j, instead of returning a function.
    })(i); // immediately invoke the function passing the i variable as a parameter
  }
  return theCelebrities;
}

var actionCelebs = [
  { name: "Stallone", id: 0 },
  { name: "Cruise", id: 0 },
  { name: "Willis", id: 0 }
];

// var createIdForActionCelebs = celebrityIDCreator(actionCelebs);
// var stalloneID = createIdForActionCelebs[0];
// console.log(stalloneID.id); // 100
// var cruiseID = createIdForActionCelebs[1];
// console.log(cruiseID.id); // 101

//----------Another Explanation
var studnetEnrollment = (function() {
  //private variables which no one can change
  //except the function declared below.
  var count = 0;
  var prefix = "S";
  // returning a named function expression
  function innerFunc() {
    count = count + 1;
    return prefix + count;
  }
  return innerFunc;
})();
var x = studnetEnrollment(); // S1
console.log(x);
var y = studnetEnrollment(); // S2
console.log(y);
// count & prefix are the 2 private variables which can’t be changed by anyone & can only be accessible to the inner function (here its innerFunc).
// This access is possible only by the feature called Closure.

// The Closure is a collection of variables in an outer function
// which gives access to the inner function scope to protect the global namespace.

// Another Explanation

function buildContor(i) {
  var contor = i;
  var displayContor = function() {
    console.log(contor++);
    contor++;
  };
  return displayContor;
}

var myContor = buildContor(1);
myContor(); // 1
myContor(); // 2
myContor(); // 3

// new closure - new outer scope - new contor variable
var myOtherContor = buildContor(10);
myOtherContor(); // 10
myOtherContor(); // 11

// myContor was not affected
myContor(); // 4

// Remember:Closure are nested function which has access to the outer scope
// After the outer function is returned, by keeping a reference to the inner function
// (the closures) we prevent the outer scope to be destroyed.
// Another extremely important thing to understand is that a closure is created at
// every function call. Whenever I’m using the closure, it will reference the same outer
// scope. If any variable is change in the outer scope,
// than the change will be visible in the next call as well.

// 1M = 10 Lakhs 1,000,000,
// 1.5M = 15Lakhs 1,500,000, (125000/Month)
