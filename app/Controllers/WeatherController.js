import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";


function _drawWeather(){
    let weatherTemplate = ''
    if(ProxyState.weather){
        weatherTemplate = ProxyState.weather.WeatherTemplate
    }
    document.getElementById('weather').innerHTML = weatherTemplate
}


export class WeatherController {
    constructor(){
        ProxyState.on("weather", _drawWeather)
        console.log("hello from weather controller")
        weatherService.getWeather()
    }

    toggleTemp(){
        
        if (document.getElementById('trueWeather').innerHTML == `${ProxyState.weather.fahr}°F`)
        {
            document.getElementById('trueWeather').innerHTML = `${ProxyState.weather.cels}°C`
        } else {
            document.getElementById('trueWeather').innerHTML = `${ProxyState.weather.fahr}°F`
        }
    }
}
