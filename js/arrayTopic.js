


// ----------- SET
//Set can store any types of values whether primitive or objects.
//Set in ES6 are ordered: elements of the set can be iterated in the insertion order.

// ----------- MAP
//A map can have a key value which can be a string, number, object or even NaN.
//key and value in Map can be in any data type, not limited to only string or integer.

//------------- OBJECT
    //1. Each key in Object — or we normally call it “property” — 
         //is also unique and associated with a single value.
    //2.  Object, it follows the rule of normal dictionary. 
         //The keys MUST be simple types — either integer or string or symbols.


    var colors = ["blue", "red", "green", "blue", "yellow", "red"];
    var uniqueColors = Array.from(new Set(colors));
    console.log("colors : ", colors);
    console.log("UniqueColors : ", uniqueColors)
    
    var students = 
        [
            {"name":"Joe", "age":17}, 
            {"name":"Bob", "age":17}, 
            {"name":"Carl", "age": 35}
        ]
    var uniqueAge = [...new Set(students.map( item => item.age ))];
    
    [...new Set(array.map())]
    // const unique = [...new Set(array.map(item => item.age))];
    console.log(" uniqueAge : ", uniqueAge);
    
    const array = [
        { id: 3, name: 'Central Microscopy', fiscalYear: 2018 },
        { id: 5, name: 'Crystallography Facility', fiscalYear: 2018 },
        { id: 3, name: 'Central Microscopy', fiscalYear: 2017 },
        { id: 5, name: 'Crystallography Facility', fiscalYear: 2017 }
    ];
    const result = [];
    const map = new Map();
    for (const item of array) {
        if(!map.has(item.id)){
            map.set(item.id, true);    // set any value to Map
            result.push({
                id: item.id,
                name: item.name
            });
        }
    }
    console.log(result)
    
    var arr = [1, 2, 2, 4, 5, 5];
    var objArray = [{a:1},{b:2},{a:1}];
    var newObjArray = objArray.filter((obj, index) => { 
    return objArray.map(obj => obj['a']).indexOf(obj['a']) === index;    
    });
    console.log("newObjArray : ", newObjArray);
    
    ///SINGLE LINE -- GET UNIQUE OBJECT from arryaOfObjects
    var objArray = [{id:1},{id:2},{id:1}];
    var newObjArray = objArray.filter((obj, index) => objArray.map(obj => obj['id']).indexOf(obj['id']) === index); 
    console.log("newObjArray : ", newObjArray);

    
    
    var array=[1,2,3,4,5];
    console.log("1. array : ", array);
    
    var splicedArray = array.splice(0);
    console.log("splicedArray : ", splicedArray);
    
    var slicedArray = array.slice(1);
    console.log("slicedArray : ", slicedArray);
    console.log("2. array : ", array);
    
    