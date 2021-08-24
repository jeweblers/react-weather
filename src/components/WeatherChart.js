import { Line, LineChart, ResponsiveContainer } from 'recharts'

const data02 = [
  { name: 'Page A', uv: 300, pv: 2600, amt: 3400 },
  { name: 'Page B', uv: 400, pv: 4367, amt: 6400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
  { name: 'Page G', uv: 189, pv: 4800, amt: 2400 },
]

const WeatherChart = () => {
  return (
    <div>
      <ResponsiveContainer width={'100%'} aspect={4.0/1.5}>
        <LineChart data={data02} syncId="test">
          <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default WeatherChart
