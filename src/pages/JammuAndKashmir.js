import React from 'react'
import Layout from '../component/Layout'
import '../component/style.css'
import PieCHart from '../component/PieCharts'
import AreaCharts from '../component/AreaCharts'
import BarCharts from '../component/BarCharts'
const JammuAndKashmir = () => {
  return (
    <Layout>
      <h1 className='title'>Jammu And Kashmir</h1>
      <div className='container'>
        <div className='chart-container'> <PieCHart/></div>
        <div  className='chart-container'>  <AreaCharts/></div>
        <div  className='chart-container'> <BarCharts/></div>
       
     
     
      </div>
    </Layout>
  )
}

export default JammuAndKashmir
