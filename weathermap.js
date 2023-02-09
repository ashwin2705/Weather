function displayresult()
{
    var city=document.getElementById("city").value;
    var apikey='80077248f8ef01e1cd11dc778ceabe11';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' +apikey+ '&units=metric')    
        .then(response => response.json())
        .then(data=>
        {
            var t=data['main']['temp']
            var u=data['main']['temp_min']
            var v=data['main']['temp_max']
            document.getElementById("output").innerHTML=t;
            document.getElementById("min").innerHTML=u;
            document.getElementById("max").innerHTML=v;
        })
}