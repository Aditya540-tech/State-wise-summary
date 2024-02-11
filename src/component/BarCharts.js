import React from 'react'

import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
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

const BarCharts = () => {
 
  return (
    <div>
       <h1 className="chart-heading">Bar Chart</h1>
      <ResponsiveContainer width="80%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="population" fill="#8884d8" />
          <Bar dataKey="average_temperature" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    
    </div>
  )
}

export default BarCharts
