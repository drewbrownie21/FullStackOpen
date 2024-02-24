import { useState, useEffect } from 'react'
import Search from './components/Search'
import DisplayCountries from './components/DisplayCountries'
import CountryService from './services/countryServices'

function App() {
  const [countries, setCountries] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [singleCountry, setSingleCountry] = useState(null)
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [latlong, setLatlong] = useState('')
  const [temp, setTemp] = useState('')
  const [wind, setWind] = useState('')

  const handleSelectedCountry = (country) => {
    setSelectedCountry(country)
  }

  // Gets all the countries first - returns a list of all countries names 
  useEffect(() => {
    CountryService
      .getAllCountries()
      .then(response => {
        setCountries(response.map(country => country.name.common))
      })
    }, [newSearch])

  // sets all country states
  useEffect(() => {
    // If there is only one country left
    if (countriesToShow.length === 1) {
        CountryService.getCountry(countriesToShow[0])
            .then(response => {
                setSingleCountry(response)
                setLatlong(response.latlng)
            })
            .catch(error => {
                console.error('Error fetching country data:', error);
            });
        if(singleCountry !== null){
          CountryService.getWeather(latlong)
            .then(response => {
                setTemp(response.main.temp)
                setWind(response.wind.speed)
          })
        }
    // This block handle when a country is selected
    }else if(selectedCountry != null && typeof selectedCountry === 'string'){
      CountryService.getCountry(selectedCountry)
        .then(response => {
            setSingleCountry(response)
            setLatlong(response.latlng)
        })
      if(selectedCountry !== null){
        CountryService.getWeather(latlong)
          .then(response => {
            setTemp(response.main.temp)
            setWind(response.wind.speed)        
        })
      }
    }else {
      // Reset singleCountry if no country is selected or shown
      setSingleCountry(null);
    }
  }, [selectedCountry, countries, singleCountry])

  const countriesToShow = newSearch === '' 
  ? []
  : countries.filter(country => country.toLowerCase().includes(newSearch.toLowerCase()))

  // Set newSearch to whatever is in the text field, also sets selectCountry to null
  const handleSearch = (event) => {
    setNewSearch(event.target.value)
    setSelectedCountry(null)
  }

  return (
    <div>
      <Search newSearch={newSearch} handleSearch={handleSearch} />
      <DisplayCountries 
          countries={countriesToShow} 
          singleCountry={singleCountry}
          selectedCountryFunc={handleSelectedCountry}
          temp={temp}
          wind={wind}
      />
    </div>
  )
}

export default App
