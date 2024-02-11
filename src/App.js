
import './App.css';
import Layout from './component/Layout';
import {Route,Routes} from 'react-router-dom'
import PopChart from './component/PopChart';
import AndraPradesh from './pages/AndraPradesh';
import Arrunchal_pradesh from './pages/Arrunchal_pradesh';
import Assam from './pages/Assam';
import Bihar from './pages/Bihar';
import Chhattisgarh from './pages/Chhattisgarh';
import Goa from './pages/Goa';
import Gujarat from './pages/Gujarat';
import Haryana from './pages/Haryana';
import Himachal_Pradesh from './pages/Himachal_Pradesh';
import JammuAndKashmir from './pages/JammuAndKashmir';
import UttarPradesh from './pages/UttarPradesh';
import Maharashstra from './pages/Maharashstra';




function App() {
  return (
   <Routes>
    <Route path='/' element={<PopChart/>}/>
    <Route path='/andrapradesh' element={<AndraPradesh/>}/>
    <Route path='/arrunchal_pradesh' element={<Arrunchal_pradesh/>}/>
    <Route path='/assam' element={<Assam/>}/>
    <Route path='/bihar' element={<Bihar/>}/>
    <Route path='/chattisgarh' element={<Chhattisgarh/>}/>
    <Route path='/goa' element={<Goa/>}/>
    <Route path='/gujarat' element={<Gujarat/>}/>
    <Route path='/haryana' element={<Haryana/>}/>
    <Route path='/himmachal_pradesh' element={<Himachal_Pradesh/>}/>
    <Route path='/jammuandkashmir' element={<JammuAndKashmir/>}/>
    <Route path='/uttarpradesh' element={<UttarPradesh/>}/>
    <Route path='/maharashtra' element={<Maharashstra/>}/>
   </Routes>
  );
}

export default App;
