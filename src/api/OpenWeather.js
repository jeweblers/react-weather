import axios from 'axios'

function buildUrl (slug, params) {
  let url = process.env.REACT_APP_WEATHER_API + '/' + slug

  const esc = encodeURIComponent
  const query = Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&')

  url += '?' + query
  url += '&appid=' + process.env.REACT_APP_WEATHER_KEY

  return url
}

const OpenWeather = {
  getWeatherById (cityId) {
    const url = buildUrl('weather', { id: cityId })
    const weather = localStorage.getItem(url)

    if (weather) {
      return new Promise(resolve => resolve({
        data: JSON.parse(weather),
      }))
    }

    return axios.get(url).then(response => {
      localStorage.setItem(url, JSON.stringify(response.data))

      return response
    })
  },
}

export default OpenWeather
