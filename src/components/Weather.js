import { Grid } from '@material-ui/core'
import { formatDate } from '../utils/date'
import { getWeatherIcon } from '../utils/icon'

const Weather = (
  { icon, date, temperature, weather, humidity, windSpeed },
) => {
  return (
    <Grid container className="weather">
      <Grid item xs={12} className="weather__date">{formatDate(date)}</Grid>
      <Grid item xs={12} className="weather__temperature">
        {icon ? <img src={getWeatherIcon(icon)} alt={''}/> : ''}
        <p>{temperature}</p>
      </Grid>
      <Grid item xs={12} className='weather__state'>{weather}</Grid>

      <Grid container>
        <Grid item sm={6}>
          <p>Humidity</p>
          <p className='text-bold'>{humidity}</p>
        </Grid>
        <Grid item sm={6}>
          <p>Wind speed</p>
          <p className='text-bold'>{windSpeed}</p>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Weather
