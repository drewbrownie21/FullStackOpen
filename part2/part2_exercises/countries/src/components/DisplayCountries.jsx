const DisplayCountries = ({countries, singleCountry, selectedCountryFunc}) => {
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

            </div>
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