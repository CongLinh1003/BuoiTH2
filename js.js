//Slide 5 PPTX

//const urlBacon = "https://baconipsum.com/api/?type=all-meat";
const urlBacon = "https://jsonplaceholder.typicode.com/todos/1";
(function () {
    $.ajax({
        method: "GET",
        url: urlBacon,
        dataType: "json"
    })
    .done(function (data) {
        console.log(data);
    })
    .fail(function () {
        alert("no good");
    });
})()

//Slide 6

$.ajax({
    url: "https://jsonplaceholder.typicode.com/todos/1",
    beforeSend: function (xhr) {
        xhr.overrideMimeType("text/plain; charset=x-user-defined");
    }
})
    .done(function (data) {
        if (console && console.log) {
            console.log("Sample of data:", data.slice(0, 100));
        }
    });

//Slide 7

//Get all users
// var url = "http://localhost:8080/api/v1/users";
var url = 'https://jsonplaceholder.typicode.com/todos';
var xhr = new XMLHttpRequest()
xhr.open('GET', url, true)
xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(null);

//slide 8
 // Get a user
//  var url = "http://localhost:8080/api/v1/users";
 var xhrOne = new XMLHttpRequest()
 xhrOne.open('GET', url + '/1', true)
 xhrOne.onload = function () {
     var users = JSON.parse(xhrOne.responseText);
     if (xhrOne.readyState == 4 && xhrOne.status == "200") {
         console.table(users);
     } else {
         console.error(users);
     }
 }
 xhrOne.send(null);

 //slide 9
 
  // // Post a user
        // var url = "http://localhost:8080/api/v1/users";
        var url9 = 'https://my-json-server.typicode.com/typicode/demo/posts';    
        var data = {"userId": 333,
        "id": 333,
        "title": "i don't know",
        "completed": true};
        var data1 = {};
        data1.firstname = "John";
        data1.lastname = "Snow";
        var json = JSON.stringify(data1);

        var xhrPost = new XMLHttpRequest();
        xhrPost.open("POST", url9, true);
        xhrPost.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhrPost.onload = function () {
            console.log("Slide 9 Here!!!");
            var users = JSON.parse(xhrPost.responseText);
            if (xhrPost.readyState == 4 && xhrPost.status == "201") {
                console.table(users);
            } else {
                console.error(users);
            }
        }
        xhrPost.send(json);

        //slide 10

         // Update a user

         var data2 = {};
         data2.firstname = "John2";
         data2.lastname = "Snow2";
         var json = JSON.stringify(data2);
 
         var xhrPut = new XMLHttpRequest();
         xhrPut.open("PUT", url + '/12', true);
         xhrPut.setRequestHeader('Content-type', 'application/json; charset=utf-8');
         xhrPut.onload = function () {
            console.log("Slide 10 Here!!!");
             var users = JSON.parse(xhrPut.responseText);
             if (xhrPut.readyState == 4 && xhrPut.status == "200") {
                 console.table(users);
             } else {
                 console.error(users);
             }
         }
         xhrPut.send(json);
 
// Slide 11

  // Delete a user
  var xhrDel = new XMLHttpRequest();
  xhrDel.open("DELETE", url + '/12', true);
  xhrDel.onload = function () {
    
    console.log("Slide 11 Here!!!");
      var users = JSON.parse(xhrDel.responseText);
      if (xhrDel.readyState == 4 && xhrDel.status == "200") {
          console.table(users);
      } else {
          console.error(users);
      }
  }
  xhrDel.send(null);
