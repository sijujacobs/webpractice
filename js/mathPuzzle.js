var ans = [6, 8, 13];
var initValue = -15;
var aValues = [];
var bValues = [];
var cValues = [];
var d6Values = [];
var d8Values = [];
var pairValues = [];

// a + b = 8;
// a + c = 13;
// b + d = 8;
// c - d = 6;
for (var i = -15; i < 15; i++) {
  for (var j = -15; j < 15; j++) {
    if (i + j === 8) {
      //   console.log(" ", i, "-", j);
      bValues.push(j);
    }
    if (i + j === 13) {
      //   console.log(" ", i, "-", j);
      cValues.push(j);
    }
  }
}
for (var k = -15; k < 15; k++) {
  for (var bIndex = 0; bIndex < bValues.length; bIndex++) {
    var bValue = bValues[bIndex];
    if (bValue + k === 8) {
      d8Values.push(k);
    }
  }
}
for (var l = -15; l < 15; l++) {
  for (var cIndex = 0; cIndex < cValues.length; cIndex++) {
    var cValue = cValues[cIndex];
    if (cValue - l === 6) {
      d6Values.push(l);
    }
  }
}
var dValues = Array.from(new Set(d8Values, d6Values));

// console.clear();

// console.log("aValues : ", aValues);
console.log("bValues : ", bValues);

console.log("cValues : ", cValues);
console.log("d6Values : ", dValues);
// console.log("d8Values : ", d8Values);

//     for( var cIndex=0; cIndex < cValues.length; cIndex++){
//         var cValue = cValues[cIndex];
//             if(cValue - i === 6){
//                 d6Values.push(i);
//             }
//     }
