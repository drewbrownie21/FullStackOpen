import { useState, useEffect } from 'react'
import Search from './components/Search'
import DisplayCountries from './components/DisplayCountries'
import CountryService from './services/countryServices'

function App() {
  const [countries, setCountries] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [displayedCountry, setDisplayedCountry] = useState(null)

  useEffect(() => {
    CountryService
      .getAllCountries()
      .then(response => {
        setCountries(response.map(country => country.name.common))
      })
  }, [newSearch])

  const countriesToShow = newSearch === '' 
  ? []
  : countries.filter(country => country.toLowerCase().includes(newSearch.toLowerCase()))

  const handleSearch = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <Search newSearch={newSearch} handleSearch={handleSearch} />
      <DisplayCountries countries={countriesToShow}/>
    </div>
  )
}

export default App
