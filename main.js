// api key: AIzaSyCxgCifwSi9WJuymY80fapZwth4Fxhz594
$('form').submit(function (e) {
    e.preventDefault();
})
var rUrl = '';

$('#request').click(function () {
    var startLocation = $('#start-location').val();
    var endLocation = $('#end-location').val();
    console.log($('#start-location').val());
    rUrl = "Access-Control-Allow-Origin:https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + startLocation + "&destinations=" + endLocation + "&key=AIzaSyCxgCifwSi9WJuymY80fapZwth4Fxhz594";
    var request = createCORSRequest("get", rUrl);
    if (request) {
        // Define a callback function
        request.onload = function () {
            console.log(request.responseText);
        };
        // Send request
        request.send();
    }
});

function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // XHR has 'withCredentials' property only if it supports CORS
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") { // if IE use XDR
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}