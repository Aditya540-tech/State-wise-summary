import React from 'react'
import Layout from '../component/Layout'
import '../component/style.css'
import BarCharts from '../component/BarCharts'
import AreaCharts from '../component/AreaCharts'
import PieCHart from '../component/PieCharts'
const Chhattisgarh = () => {
  return (
    <Layout>
      <h1 className='title'>Chhattisgarh</h1>
      <div className='container'>
        <div className='chart-container'> <PieCHart/></div>
        <div  className='chart-container'>  <AreaCharts/></div>
        <div  className='chart-container'> <BarCharts/></div>
      </div>
    </Layout>
  )
}

export default Chhattisgarh
