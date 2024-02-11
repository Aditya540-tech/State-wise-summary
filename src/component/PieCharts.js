import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  {
      name:'Andhra Pradesh',
      population:27.6,
      average_temperature:27.6,
  },
  {
      name:'Arunachal Pradesh',
      population:20.1,
      average_temperature:20.1,
  },
  {
      name:'Assam',
      population:24.2,
      average_temperature:24.2
  },
  {
      name:'Bihar',
      population:25.8,
      average_temperature:25.8
  },
  {
      name:'Chhattisgarh',
      population:26.4,
      average_temperature:25.4,
  },
  {
      name:'Goa',
      population:13.3,
      average_temperature:26.4
  },
  {
      name:'Gujarat',
      population:26.4,
      average_temperature:26.6
  },
  {
      name:'Haryana',
      population:20.5,
      average_temperature:25.3
  },
  {
      name:'Himachal Pradesh',
      population:19.2,
      average_temperature:15.8
  },
  {
      name:'Jammu and Kashmir',
      population:17.1,
      average_temperature:13.6
  },
  {
      name:'Uttar Pradesh',
      population: 24.8,
      average_temperature:25.5
  },
  {
      name:'Maharashtra',
      population: 26.8,
      average_temperature:26.4
  }
]
const PieCHart = () => {
  return (
    <div>
      <h1 className="chart-heading">Line Chart</h1>
      <ResponsiveContainer width="85%" aspect={3}>
        <LineChart data={data} width={600} height={300} margin={{ top: 5, right: 300, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={'preserveStartEnd'}  />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: 'yellow' }} />
          <Legend />
          <Line type="monotone" dataKey="population" stroke="red" activeDot={{ r: 8 }} />
          
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PieCHart
