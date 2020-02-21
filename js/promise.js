(function() {
  function PromiseTopic() {
    this.getAlbumsXmlHTTP = () => {
      const xHttpRequest = new XMLHttpRequest();
      xHttpRequest.open("GET", "https://jsonplaceholder.typicode.com/albums");
      xHttpRequest.send();
      xHttpRequest.onload = function() {
        let parsedHttpResponse = JSON.parse(xHttpRequest.response);
        console.log("Http :: parsedHttpResponse : ", parsedHttpResponse);
      };
    };
    this.getUsers = () => {
      return new Promise((resolve, reject) => {
        var ajaxRrequest = $.ajax({
          url: "https://jsonplaceholder.typicode.com/users"
        });
        ajaxRrequest.done(response => {
          resolve(response);
        });
        ajaxRrequest.fail((jqXHR, textStatus) => {
          let errorObject = {
            errorcode: jqXHR.status,
            message: textStatus
          };
          reject(errorObject);
        });
      });
    };

    this.getPostOfUser = userID => {
      return new Promise((resolve, reject) => {
        let ajaxRequest = $.ajax({
          url: "https://jsonplaceholder.typicode.com/posts/",
          data: { userId: userID }
        });

        ajaxRequest.done(response => {
          resolve(response);
        });
        ajaxRequest.fail((jqXHR, textStatus) => {
          let errorObject = {
            errorcode: jqXHR.status,
            message: textStatus
          };
          reject(errorObject);
        });
      });
    };
  }

  let pTopic = new PromiseTopic();
  pTopic
    .getUsers()
    .then(result => console.log("GetUsers: Promise Then : result : ", result))
    .catch(error => console.log("GetUsers: Promise Catch : Error : ", error));

  var postPromises = [pTopic.getPostOfUser(2), pTopic.getPostOfUser(3)];
  var promises = Promise.all(postPromises);
  promises.then(function(results) {
    console.log(results);
  });

  pTopic.getAlbumsXmlHTTP();
})();
// var request = $.ajax({
//     url: "baseURL",
//     method: "POST",
//     data: { id : "1001" },
//     dataType: "JSON"
//   });
