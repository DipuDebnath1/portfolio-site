import Swal from 'sweetalert2'
import { FaGithub, FaLinkedin,FaFacebook, FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Contact = () => {

    const handleSubmit = (e) =>{
      
        e.preventDefault()

        e.target.name.value=''
        e.target.email.value=''
        e.target.message.value=''
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your message sent successful',
            showConfirmButton: false,
            timer: 1500
          })
        
    }

    return (
        <div className="px-10 pt-10 pb-20 md:py-20">
            <div className="text-[#111418]"  data-aos="zoom-in-up">
                <header className="relative w-full flex justify-center items-center py-10">
                    <h2  className="z-0 absolute w-full text-6xl md:text-[5rem] lg:text-[8rem] opacity-[0.1] text-center font-bold"> CONTACT</h2>
                    <h2  className=" text-3xl md:text-4xl lg:text-5xl font-semibold border-b-4 border-[#0DCAF0] text-center-center">Contact</h2>


                </header>
                <main className="pt-5 gap-10 flex flex-col lg:flex-row">
                    <div className="flex-1 flex gap-5 flex-col"  data-aos="zoom-in-up">
                        <h2 className="text-2xl md:text-3xl font-semibold">Estimate your Project?</h2>
                        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

                            <input type="text" name="name" placeholder="Type name here..." style={{ outline: 'none' }} className="border-b-2  text-lg p-2 input-info w-full " required />

                            <input type="email" name="email" placeholder="Type email here..." style={{ outline: 'none' }} className="border-b-2  text-lg p-2 input-info w-full " required/>

                            <textarea type="text" name="message" placeholder="Type here how can I help you ..." style={{ outline: 'none' }} className="border-b-2  text-lg p-2 input-info w-full " required />

                            <button className="btn btn-info text-white text-lg">Send</button>

                        </form>
                    </div>
                    <div className="flex-1 text-lg flex flex-col"  data-aos="zoom-in-up">
                        <h2 className="text-2xl md:text-3xl font-semibold">{`Let's`} get in touch</h2>
                        <p className=" py-4">I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up.</p>
                        <h4><span className="font-bold">Email : </span> dipudebnath966@gmail.com</h4>
                        <h4 className='grow'><span className="font-bold">Address :</span> Thakurgaon-5100, Bangladesh</h4>

                        <ul className='flex my-8 justify-center text-5xl gap-5 '>
                        <Link target='blank' to={'https://www.linkedin.com/in/dipudebnath/'}><FaLinkedin className='linear duration-300 hover:text-[#0dcaf0] hover:scale-110'></FaLinkedin></Link>                    
                        <Link target='blank' to={'https://github.com/DipuDebnath1'}><FaGithub className='linear duration-300 hover:text-[#0dcaf0] hover:scale-110'></FaGithub></Link>                    
                        <Link target='blank' to={'https://www.facebook.com/userdipudebnath' }><FaFacebook className='linear duration-300 hover:text-[#0dcaf0] hover:scale-110'></FaFacebook></Link>
                        <Link target='blank' to={'https://www.instagram.com/dipu_debnath1/'}><FaInstagram className='linear duration-300 hover:text-[#0dcaf0] hover:scale-110'></FaInstagram></Link>
                        
                        </ul>
                    </div>
                   

                </main>

            </div>
        </div>
    );
};

export default Contact;