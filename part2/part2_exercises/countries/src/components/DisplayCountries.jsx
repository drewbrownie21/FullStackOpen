import CountryServices from "../services/countryServices"
import { useState, useEffect } from "react"

const DisplayCountries = (countries) => {
    const [singleCountry, setSingleCountry] = useState(null)

    useEffect(() => {
        if (countries.countries.length === 1) {
            CountryServices.getCountry(countries.countries)
                .then(response => {
                    setSingleCountry(response)
                })
                .catch(error => {
                    console.error('Error fetching country data:', error);
                });
        }
    }, [countries])

    if(countries.countries.length > 10){
        return(
            <div>
                Too many matches, specfiy another filter
            </div>
        )
    }else if(countries.countries.length == 1 && singleCountry != null){
        return(
            <div>
            <h2>{singleCountry.name.common}</h2>
            <div>Capital: {singleCountry.capital}</div>
            <div>Area: {singleCountry.area}</div>
            <b>Languages</b>
            <ul>
                {Object.entries(singleCountry.languages).map(([code, name], index) => (
                    <div key={index}>
                    <li>{name}</li>
                    </div>
                ))}
            </ul>
            <div>
                <img src={singleCountry.flags.png} />
            </div>

            </div>
        )
    }else{
        return(
            countries.countries.map((country, index) => 
            <div key={index}>
                {country}
            </div>
            )
        )
    }
}

export default DisplayCountries
