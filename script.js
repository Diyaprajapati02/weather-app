async function getWeather()
{
    let city= document.getElementById("city").value;
    let apikey= "0eeba50422f9efda806ce211d049b3bd";
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    let response= await fetch(url);
    let data= await response.json();

    if (data.cod=== 404)
    {
        document.getElementById("result").innerHTML= "City not found ❌";
        return;
    }

    document.getElementById("result").innerHTML= `
    <h2>${data.name}</h2>
    <p>🌡 Temperature: ${data.main.temp} °C </p>
    <p>☁ Weather: ${data.weather[0].main} </p>
    <p>💧 Humidity: ${data.main.humidity}% </p>
    `;

}
