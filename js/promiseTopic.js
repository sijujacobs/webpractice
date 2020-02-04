
var products = [
    {id:1, name : "product1", brand:"brand1"},
    {id:2, name : "product2", brand:"brand2"},
    {id:3, name : "product3", brand:"brand3"}
];

function getProducts(){
    console.log(' PromiseTopic :: getProducts : products - ', products);
}

var newProduct = {id:4, name : "product4", brand:"brand4"};
addProduct(newProduct)
.then((result) => console.log("Addproduct: result : ", result) )
.catch( (error) => console.log("Addproduct: error : ", error) )

function addProduct(nProduct){
    return new Promise( (resolve, reject ) => {
        setTimeout(() => {
            products.push(nProduct);
            var hasError = false;
            if(!hasError){
                let resultObject = {
                    data : nProduct,
                    message : "SUCCESS"
                }
                resolve(resultObject);
            }else{
                let errorObject = {
                    data : nProduct,
                    message : "ERROR"
                }
                reject(errorObject)
            }
        }, 3000);
    });
}

// ---------------------- FETCH 
// fetch(url)
//   .then(function(data) {
//     // Here you get the data to modify as you please
//     })
//   })
//   .catch(function(error) {
//     // If there is any error you will catch them here
//   });  

//--------------------- AXIOS

// axios.get(url)
//    .then(response => {console.log(" :: SUCCESS : ", response)})
//    .catch(err => {console.log(" :: ERROR : ", err)})

/// ---------------- ASYNC/AWAIT

async function onPageLoad(){
    await addProduct(newProduct);
    getProducts ();
}

/// ---------------- ASYNC/AWAIT with FETCH

async function getData(){
    var fetchResult = await fetch(url);
    var resJson = await fetchResult.json();
    console.log(' getData :: resJson - : ', resJson);
}
