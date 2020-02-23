var textContainer = document.querySelectorAll('h2');

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here
        var city = document.createTextNode(apiResult.name);
        textContainer[0].appendChild(city);

        var weather = document.createTextNode(apiResult.weather[0].description);
        textContainer[1].appendChild(weather);
    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=33467,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();