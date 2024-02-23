import axios from 'axios'

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

export default {getAllCountries, getCountry}
