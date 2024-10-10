document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = 'c67f2f42d2a562dec22002362c3eb757'; // Colocar a chave de API aqui
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric&lang=pt_br`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = `
                <h2>Clima em ${data.name}</h2>
                <p>Temperatura: ${data.main.temp}°C</p>
                <p>Clima: ${data.weather[0].description}</p>
            `;
            document.getElementById('weatherResult').innerHTML = weather;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `<p>Error fetching data</p>`;
        });
});
