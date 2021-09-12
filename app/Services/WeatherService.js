import { ProxyState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"


const api = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather'
})

class WeatherService {
    async getWeather() {
        let res = await api.get('')
        ProxyState.weather = new Weather(res.data)
        console.log('this is the weather', res.data.kelvin);
        console.log(ProxyState.weather)
    }
    
}

export const weatherService = new WeatherService();