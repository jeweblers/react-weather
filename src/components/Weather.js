import { Box } from '@material-ui/core'
import { formatDate } from '../utils/date'
import OpenWeather from '../api/OpenWeather'
import { useEffect, useState } from 'react'
import { getWeatherIcon } from '../utils/icon'

const Weather = (props) => {
  const [weather, setWeather] = useState()
  const { city, date } = props

  const getWeather = () => {
    if (city) {
      OpenWeather.getWeatherById(city.id).then(response => {
        setWeather(response.data.weather[0])
      })
    }
  }

  useEffect(() => {
    getWeather()
  })

  return (
    <Box>
      <p>{formatDate(date)}</p>
      {
        weather && weather.icon &&
        (
          <img src={getWeatherIcon(weather.icon)} alt={''}/>
        )
      }
    </Box>
  )
}

export default Weather
