import axios from 'axios'

const useCache = process.env.REACT_APP_CACHE

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

function makeRequest (url, cache = true) {
  if (cache) {
    const data = localStorage.getItem(url)

    if (data) {
      return new Promise(resolve => resolve({
        data: JSON.parse(data)
      }))
    }

    return axios.get(url).then(response => {
      if (cache) {
        localStorage.setItem(url, JSON.stringify(response.data))
      }

      return response
    })
  }
}

const OpenWeather = {
  getWeatherById (cityId) {
    const url = buildUrl('weather', { id: cityId })

    return makeRequest(url, useCache)
  },
  getForecastHourly (cityId) {
    const url = buildUrl('forecast', { id: cityId })

    return makeRequest(url, useCache)
  },
}

export default OpenWeather
