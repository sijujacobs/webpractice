//------- Promise Example 1

// Promise Example 3

const loadImage = url => {
  return new Promise(function(resolve, reject) {
    //Open a new XHR
    var request = new XMLHttpRequest();
    request.open("GET", url);
    // When the request loads, check whether it was successful
    request.onload = function() {
      if (request.status === 200) {
        // If successful, resolve the promise
        resolve(request.response);
      } else {
        // Otherwise, reject the promise
        reject(
          Error(
            "An error occurred while loading image. error code:" +
              request.statusText
          )
        );
      }
    };

    request.send();
  });
};

const embedImage = url => {
  loadImage(url).then(
    function(result) {
      const img = new Image();
      var imageURL = window.URL.createObjectURL(result);
      img.src = imageURL;
      document.querySelector("body").appendChild(img);
    },
    function(err) {
      console.log(err);
    }
  );
};

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

async function onPageLoad() {
  await addProduct(newProduct);
  getProducts();
}

/// ---------------- ASYNC/AWAIT with FETCH

async function getData() {
  var fetchResult = await fetch(url);
  var resJson = await fetchResult.json();
  console.log(" getData :: resJson - : ", resJson);
}
