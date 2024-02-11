import React from 'react'
import Layout from '../component/Layout'
import '../component/style.css'
import AreaCharts from '../component/AreaCharts'
import PieCHart from '../component/PieCharts'
import BarCharts from '../component/BarCharts'
const Arrunchal_pradesh = () => {
  return (
    <Layout>
      <h1 className='title'> Arrunchal Pradesh</h1>
      <div className='container'>
        <div className='chart-container'> <PieCHart/></div>
        <div  className='chart-container'>  <AreaCharts/></div>
        <div  className='chart-container'> <BarCharts/></div>
       
     
     
      </div>
    </Layout>
  )
}

export default Arrunchal_pradesh
