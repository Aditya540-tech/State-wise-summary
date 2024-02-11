import React from 'react'
import Layout from '../component/Layout'
import '../component/style.css'
import PieCHart from '../component/PieCharts'
import AreaCharts from '../component/AreaCharts'
import BarCharts from '../component/BarCharts'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const UttarPradesh = () => {
  return (
    <Layout>
      <h1 className='title'>Uttar Pradesh</h1>
      <div className='container'>
        <div className='chart-container'> <PieCHart/></div>
        <div  className='chart-container'>  <AreaCharts/></div>
        <div  className='chart-container'> <BarCharts/></div>
       
     
     
      </div>
    </Layout>
  )
}

export default UttarPradesh
