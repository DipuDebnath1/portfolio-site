import Typewriter from 'typewriter-effect';

import banner from '../../assets/banner2.jpg'
import Skills from '../skills/Skills';
import Projects from '../ph-tube/Project';
import Contact from '../contact/Contact';
const Home = () => {
    return (
        <div>
            <div style={{ background: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className='hero min-h-screen  text-[#111418]' data-aos="zoom-in">
                <div className="hero-overlay bg-opacity-60 flex justify-center items-center text-center text-white" >
                    <div>
                        <h3 className='text-2xl md:text-3xl font-semibold'>Well Come to my Portfolio</h3>

                        <h3 className='flex flex-col mt-4 gap-2 md:gap-5 justify-center text-3xl md:text-5xl font-bold'> <span>{`I'm a `}  </span>
                            <Typewriter
                                options={{
                                    strings: [`Front End Developer`, ' React Developer','Javascript Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h3>
                    </div>
                </div>

            </div>
            <div data-aos="zoom-in-up">
                <Skills></Skills>
            </div>
            <div data-aos="zoom-in-up">
                <Projects data-aos="zoom-in-up"></Projects>
            </div>
            <div data-aos="zoom-in-up">
                <Contact data-aos="zoom-in-up"></Contact>
            </div>




        </div>

    );
};

export default Home;