import axios from 'axios'
const API_KEY = import.meta.env.VITE_SOME_KEY

const BASE_COUNTRY_URL = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAllCountries = () => {
    const request = axios.get(`${BASE_COUNTRY_URL}/all`)
    
    return request.then(response => {
        return response.data
    })
}

const getCountry = (country) => {
    const request = axios.get(`${BASE_COUNTRY_URL}/name/${country}`)

    return request.then(repsonse => {
        return repsonse.data
    })
}

const getWeather = (latlong) => {
    const lat = latlong[0]
    const lon = latlong[1]
    const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    const request = axios.get(weather_url)
    return request.then(response => {
        return response.data
    })
}

export default {getAllCountries, getCountry, getWeather}
