import './App.css'
import { Container, Grid } from '@material-ui/core'
import Search from './components/Search'
import LineChart from './components/WeatherChart'
import { useEffect, useState } from 'react'
import Weather from './components/Weather'
import OpenWeather from './api/OpenWeather'

function App () {
  const [city, setCity] = useState()
  const [weather, setWeather] = useState()
  const [chart, setChart] = useState([])

  const handleSearch = (city) => {
    setCity(city)
  }

  useEffect(() => {
    const getWeather = () => {
      if (city && city.id) {
        OpenWeather.getWeatherById(city.id)
          .then(response => setWeather(response.data))

        OpenWeather.getForecastHourly(city.id).then(response => {
          const data = response.data.list.map(item => {
            return {
              name: item.dt_txt,
              uv: item.main.temp,
            }
          })

          setChart(data)
        })
      } else {
        setWeather(undefined)
      }
    }

    getWeather()
  }, [city])

  const getWeather = () => {
    return Array.isArray(weather?.weather) ? weather?.weather[0] : {}
  }

  return (
    <Container>
      <Grid container spacing={3} style={{ paddingTop: 15, paddingBottom: 15 }}>
        <Grid item xs={12} className={'container-search'}>
          <Search onSearch={handleSearch}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <Weather
            icon={getWeather().icon}
            temperature={weather?.main?.temp}
            weather={getWeather().main}
            humidity={weather?.main?.humidity}
            windSpeed={weather?.wind?.speed}
            date={new Date()}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <LineChart chart={chart}/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
