export class Weather{
    constructor(weatherData){
        this.kelvin = weatherData.main.temp
        this.fahr = Math.floor(9/5*(this.kelvin - 273) + 32) 
        this.cels = Math.floor(this.kelvin - 273.15)
    }

    get WeatherTemplate(){
        return /*html*/ `
        <span id="trueWeather" onclick="app.weatherController.toggleTemp()">${this.fahr}°F</span>
        `
    }
}