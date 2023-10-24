
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/navber/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {

  return (
    <div className='flex flex-col md:flex-row h-auto'>

      <div className="w-full h-52 md:h-[100vh] md:w-1/4 fixed top-0 z-50">
        <Navbar></Navbar>
      </div>

      <div className='w-full z-0 md:w-3/4 md:ml-[25%] mt-16 md:mt-0 height-full'>
        <Outlet></Outlet>
      </div>


    </div>
  )
}

export default App
