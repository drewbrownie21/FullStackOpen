const DisplayCountries = ({countries, singleCountry, selectedCountryFunc, temp, wind}) => {
    const tempC = temp - 273.15
    const tempF = (tempC * (9/5)) + 32

    const handleSelectCountry = (country) => {
        selectedCountryFunc(country)
    }

    if(countries.length > 10){
        return(
            <div>
                Too many matches, specfiy another filter
            </div>
        )
    }
    else if((singleCountry != null && typeof singleCountry == "object")){
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

            <h2>Weather in {singleCountry.capital}</h2>
            <div>Temperature: {tempC.toFixed(2)} C / {tempF.toFixed(2)} F</div>
            <div>Wind: {wind} m/s</div>

            </div>
        )
    }else if(countries.length === 0){
        return(
            <div>No countires to display...</div>
        )
    }else{
        return(
            countries.map((country, index) => 
            <div key={index}>
                {country}
                <button onClick={() => handleSelectCountry(country)}>Show</button>
            </div>
            )
        )
    }
}

export default DisplayCountries