function Person(fName, lName){
    this.firstName = fName;
    this.lastName  = lName;
}

Person.prototype.protoPersonFullName = function () {
    return this.firstName + " " + this.lastName;
}

var p1 = new Person("Siju", "Jacob");
console.log('p1 :: : ', p1);

var p2 = new Person("Bill", "Gates");
console.log('p2 :: : ', p2);

function Developer(lang, fName, lName){
    Person.call(this, fName, lName);// This is not inheriting anything, 
    //but executing what ever available in Person class
    this.language = lang;
}
Developer.prototype = Object.create(Person.prototype);// This will inherit everything from Person
Developer.prototype.protoDeveloperName  = function () {
    return this.language + ", " + this.firstName + " " + this.lastName;
}
var d1 = new Developer("C++", "David", "Botham");
console.log('d1 :: protoDeveloperName : ', d1.protoDeveloperName());
console.log('d1 :: protoPersonFullName : ', d1.protoPersonFullName());