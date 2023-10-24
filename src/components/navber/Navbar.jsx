import { Link, NavLink } from 'react-router-dom';
import profile from '../../assets/profile.png'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa6";
const Navbar = () => {
    return (
        <div className='bg-[#111418] p-5 md:p-10 flex md:flex-col justify-between items-center text-white md:h-full'>
            {/* profile  */}
            <div className='md:flex-1'>
                <figure className='cursor-pointer hidden md:block'>
                    <Link to={'/'}><img className='bg-gray-500 w-20 h-20 md:h-28 md:w-28  lg:w-40 lg:h-40 rounded-full object-cover mx-auto border-4 border-[#0DCAF0]' src={profile} alt="" /></Link>

                </figure>
                <Link to={'/'}>
                    <h2 className='text-center text-lg font-semibold lg:text-2xl xl:text-3xl lg:py-4'>Dipu Debnath</h2></Link>
            </div>
            {/* navbar  */}
            <nav className='md:mt-5 xl:flex-grow flex justify-center'>
                <ul className='flex md:flex-col gap-3 items-center text-center text-sm md:text-lg lg:text-xl'>
                    <NavLink className={'linear duration-300 hover:text-[#0DCAF0]'} to={'/'}>Home</NavLink>
                    {/* <NavLink className={'hover:text-[#0DCAF0]'} to={'/resume'}>Resume</NavLink> */}
                    <NavLink className={'linear duration-300 hover:text-[#0DCAF0]'} to={'/skills'}>Skills</NavLink>
                    <NavLink className={'linear duration-300 hover:text-[#0DCAF0]'} to={'/projects'}>Projects</NavLink>
                    <NavLink className={'linear duration-300 hover:text-[#0DCAF0]'} to={'/contact'}>Contact</NavLink>
                </ul>

            </nav>
            {/* social Link  */}
            <div className='hidden md:block'>
                <ul className='flex md:mt-8 gap-3 justify-between lg:justify-around text-xl w-3/4 mx-auto'>
                    <Link target='blank' to={'https://www.linkedin.com/in/dipudebnath/'}><FaLinkedin className='linear duration-300 hover:text-[#0dcaf0] hover:scale-110'></FaLinkedin></Link>
                    <Link target='blank' to={'https://github.com/DipuDebnath1'}><FaGithub className='linear duration-300 hover:text-[#0dcaf0] hover:scale-110'></FaGithub></Link>
                    <Link target='blank' to={'https://www.facebook.com/userdipudebnath'}><FaFacebook className='linear duration-300 hover:text-[#0dcaf0] hover:scale-110'></FaFacebook></Link>
                    <Link target='blank' to={'https://www.instagram.com/dipu_debnath1/'}><FaInstagram className='linear duration-300 hover:text-[#0dcaf0] hover:scale-110'></FaInstagram></Link>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;