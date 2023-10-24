import { Link } from "react-router-dom";
import phTube from "../../assets/ph-tube.png";
import wedding from "../../assets/wedding.png";
import donation from "../../assets/donation.png";
import Brust from "../../assets/FruitBrust.png";


const Projects = () => {
    return (
        <div className="px-10 pt-10 pb-20 md:py-20">
            <div className="text-[#111418]">
                <header className="relative w-full flex justify-center items-center pb-20"  data-aos="zoom-in-up">
                    <h2 className="z-0 absolute w-full text-5xl md:text-[5rem] lg:text-[8rem] opacity-[0.1] text-center font-bold">PROJECTS</h2>
                    <h2 className=" text-3xl md:text-4xl lg:text-5xl font-semibold border-b-4 border-[#0DCAF0] text-center-center">Projects</h2>
                </header>
                <main className=" grid lg:grid-cols-2 gap-10">

                    {/* wedding  */}
                    <div  data-aos="zoom-in-up">
                        <div className="h-60 w-full" style={{ backgroundImage: `url("${wedding}")`, backgroundSize: 'cover' }}>
                        </div>

                        <div className="p-3">
                            <h2>Using: <span className="font-semibold">HTML, CSS, TailwindCSS , JS, React, Firebase(Authentication & authorization) & Others tools </span></h2>
                        </div>

                        <div className="p-3 space-x-2">
                           <Link className="btn bg-red-500 hover:bg-red-600 btn-sm text-white " to={'https://arange-wedding-event-dipudebnath966-gmailcom.vercel.app/' } target="blank">Live Link</Link>
                           <Link className="btn bg-red-500  hover:bg-red-600 btn-sm text-white " to={''} target="blank">Code Link</Link>
                        </div>
                    </div>

                    {/* donation  */}
                    <div  data-aos="zoom-in-up">
                        <div className="h-60 w-full" style={{ backgroundImage: `url("${donation}")`, backgroundSize: 'cover' }}>
                        </div>

                        <div className="p-3">
                            <h2>Using: <span className="font-semibold">HTML, CSS, TailwindCSS , JS, React & Others tools </span></h2>
                        </div>

                        <div className="p-3 space-x-2">
                           <Link className="btn bg-red-500 hover:bg-red-600 btn-sm text-white " to={'https://donation-campaign-dipudebnath966-gmailcom.vercel.app' } target="blank">Live Link</Link>
                           <Link className="btn bg-red-500 hover:bg-red-600 btn-sm text-white " to={''} target="blank">Code Link</Link>
                        </div>
                    </div>


                     {/* ph tube  */}
                     <div  data-aos="zoom-in-up">
                        <div className="h-60 w-full" style={{ backgroundImage: `url("${phTube}")`, backgroundSize: 'cover' }}>
                        </div>

                        <div className="p-3">
                            <h2>Using: <span className="font-semibold">HTML, CSS, TailwindCSS , JavaScript & Others tools </span></h2>
                        </div>

                        <div className="p-3 space-x-2">
                           <Link className="btn bg-red-500 hover:bg-red-600 btn-sm text-white " to={'https://ph-assinment-6.vercel.app/' } target="blank">Live Link</Link>
                           <Link className="btn bg-red-500 hover:bg-red-600 btn-sm text-white " to={'https://github.com/DipuDebnath1'} target="blank">Code Link</Link>
                        </div>
                    </div>

                        {/* fruit brust  */}
                    <div  data-aos="zoom-in-up">
                        <div className="h-60 w-full" style={{ backgroundImage: `url("${Brust}")`, backgroundSize: 'cover' }}>
                        </div>

                        <div className="p-3">
                            <h2>Using: <span className="font-semibold">HTML, CSS, TailwindCSS & Others tools </span></h2>
                        </div>

                        <div className="p-3 space-x-2">
                           <Link className="btn bg-red-500 hover:bg-red-600 btn-sm text-white " to={'https://dipudebnath1.github.io/fruit-brust/' } target="blank">Live Link</Link>
                           <Link className="btn bg-red-500 hover:bg-red-600 btn-sm text-white " to={'https://github.com/DipuDebnath1/fruit-brust'} target="blank">Code Link</Link>
                        </div>
                    </div>

                       

                </main>

            </div>
        </div>
    );
};

export default Projects;