import './App.css'
import Axios from './Components/Axios/Axios'
import LineChart from './Components/LineChart/LineChart'
import Navbar from './Components/Navbar/Navbar'
// import DaisyNav from './Components/DaisyNav/DaisyNav'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart> 
      <Axios></Axios>  
    </>
  )
}

export default App
