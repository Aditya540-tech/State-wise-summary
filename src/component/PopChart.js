import React from 'react'
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Layout from './Layout';
import { Link, useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const data = [
    {
        name:'Andhra Pradesh',
        population:27.6,
        average_temperature:27.6,
        paths:'/andrapradesh'
    },
    {
        name:'Arunachal Pradesh',
        population:20.1,
        average_temperature:20.1,
        paths:'/arrunchal_pradesh'
    },
    {
        name:'Assam',
        population:24.2,
        average_temperature:24.2,
        paths:'/assam'
    },
    {
        name:'Bihar',
        population:25.8,
        average_temperature:25.8,
        paths:'/bihar'
    },
    {
        name:'Chhattisgarh',
        population:26.4,
        average_temperature:25.4,
        paths:'/chattisgarh'
    },
    {
        name:'Goa',
        population:13.3,
        average_temperature:26.4,
        paths:'/goa'
    },
    {
        name:'Gujarat',
        population:26.4,
        average_temperature:26.6,
        paths:'/gujarat'
    },
    {
        name:'Haryana',
        population:20.5,
        average_temperature:25.3,
        paths:'/haryana'
    },
    {
        name:'Himachal Pradesh',
        population:19.2,
        average_temperature:15.8,
        paths:'/himmachal_pradesh'
    },
    {
        name:'Jammu and Kashmir',
        population:17.1,
        average_temperature:13.6,
        paths:'/jammuandkashmir'
    },
    {
        name:'Uttar Pradesh',
        population: 24.8,
        average_temperature:25.5,
        paths:'/uttarpradesh'
    },
    {
        name:'Maharashtra',
        population: 26.8,
        average_temperature:26.4,
        paths:'/maharashtra'
    }
]
const PopChart = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path); 
      };

  return (
    <Layout>
        <h2 className='title'>State Wise Summary </h2>
        <div className='grid-container'>
            
        {data.map((state)=>(
            <Tooltip title={`
            Name: ${state.name}
            Population: ${state.population} million
            Average Temperature: ${state.average_temperature}°C
          `}>
            <div 
            className='grid-item'
             style={{backgroundColor: state.average_temperature>25 ? '#ee2400':'#00d2ff'}}>
                <strong className='state-name'>
                     <Link className='link' to={state.paths}>{state.name}</Link>

                    </strong>
             </div>
             </Tooltip>
        ))}
       
        </div>
     
    </Layout>
  )
}

export default PopChart
