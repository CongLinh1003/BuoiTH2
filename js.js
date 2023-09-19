//const urlBacon = "https://baconipsum.com/api/?type=all-meat";
const urlBacon = "https://65096249f6553137159b52a5.mockapi.io/customers";
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
