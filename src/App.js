import './App.css'
import { Container, Grid } from '@material-ui/core'
import Search from './components/Search'
import LineChart from './components/WeatherChart'
import Forecast from './components/Forecast'
import { useState } from 'react'
import Weather from './components/Weather'

function App () {
  const [city, setCity] = useState()

  const handleSearch = (city) => {
    setCity(city)
  }

  return (
    <Container>
      <Grid container spacing={3} style={{ paddingTop: 15, paddingBottom: 15 }}>
        <Grid item xs={12}>
          <Search onSearch={handleSearch}/>
        </Grid>
        <Grid item xs={12} md={4}>
          <Weather city={city} date={new Date()}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container>
            <Grid item xs={12}>
              <LineChart/>
            </Grid>
            <Grid item xs={12}>
              <Forecast/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
