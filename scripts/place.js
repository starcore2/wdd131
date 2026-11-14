const temperature_document = document.querySelector("#temperature");
// const windchill_visability = document.querySelector("#windchill");
// Had an idea of toggling the data but I saw the N/A instruction and just went for simple placeholder of N/A
const windchill_data_document = document.querySelector("#windchill-data");
const wind_speed_document = document.querySelector("#wind-speed");
const current_condition_document = document.querySelector('#current-condition');
// Call api and get values here
let wind_speed = 100
let current_condition = "Slightly windy"
let temperature = 0

// Wind Chill Temperature = 35.74 + 0.6215×T - 35.75×V**0.16 + 0.4275×T×V**0.16
//    where T is the actual air temperature in Fahrenheit, V is the wind speed in mph.
function calculateWindChill(temp_value, speed_wind) {
    let chilly_wind = 35.74 + (0.6215 * temp_value) - (35.75 * (speed_wind ** .16)) + (0.4275 * temp_value * (speed_wind ** 0.16));
    return chilly_wind;
};
function update_document() {
    temperature_document.innerHTML = `${temperature} °F`;
    wind_speed_document.innerHTML = `${wind_speed} mph`;
    current_condition_document.innerHTML = `${current_condition}`;
    if (wind_speed >= 3 && temperature <= 50) {
        let wind_chill = calculateWindChill(temperature, wind_speed);
        wind_chill *= 10
        wind_chill = Math.round(wind_chill)
        wind_chill /= 10
        windchill_data_document.innerHTML = `${wind_chill} °F`
    };
};

update_document();