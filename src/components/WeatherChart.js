import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const WeatherChart = ({ chart }) => {
  return (
    <div>
      <ResponsiveContainer width={'100%'} aspect={4.0 / 1.5}>
        <LineChart data={chart} syncId="test">
          <XAxis dataKey="name"/>
          <YAxis/>
          <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default WeatherChart
