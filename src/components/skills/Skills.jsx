import { IoLogoFirebase, IoLogoNpm } from "react-icons/io5";
import { BsBrowserChrome, BsGit, BsGithub } from "react-icons/bs";
import { BiLogoVisualStudio } from "react-icons/bi";
const Skills = () => {
    return (
        <div className="px-10 pt-10 pb-20 md:py-20">
            <div className="text-[#111418]">
                <header className="relative w-full flex justify-center items-center py-10"  data-aos="zoom-in-up">
                    <h2 className="z-0 absolute w-full text-6xl md:text-[5rem] lg:text-[8rem] opacity-[0.1] text-center font-bold"> SKILLS</h2>
                    <h2 className=" text-3xl md:text-4xl lg:text-5xl font-semibold border-b-4 border-[#0DCAF0] text-center-center">Skills</h2>


                </header>
                <main className="py-5">
                    <div className="lg:px-10 py-5"  data-aos="zoom-in-up">
                        <h2 className="text-2xl md:text-3xl font-bold">  {`I'am`} <span className="text-[#0DCAF0]">Dipu Debnath </span>,  a  Front End Devloper</h2>
                        <p className="mt-10 text-xl">Dedicated and enthusiastic junior front-end developer with a passion for creating responsive and visually appealing web applications. Seeking an opportunity to apply my skills in HTML, CSS,Bootstrap, Tailwind CSS, JavaScript and React to contribute to dynamic and innovative projects.</p>
                    </div>

                    <div className="pt-5 flex flex-col lg:flex-row lg:px-10" >
                        <div className="flex-1 text-xl"  data-aos="zoom-in-up">
                            <h2>HTML</h2>
                            <progress className="progress progress-info h-3 w-full" value="90" max="100"></progress>
                            <h2>CSS</h2>
                            <progress className="progress progress-info h-3 w-full" value="88" max="100"></progress>
                            <h2>Javascript</h2>
                            <progress className="progress progress-info h-3 w-full" value="80" max="100"></progress>
                            <h2>React</h2>
                            <progress className="progress progress-info h-3 w-full" value="80" max="100"></progress>
                            <h2>Tailwind CSS</h2>
                            <progress className="progress progress-info h-3 w-full" value="95" max="100"></progress>
                            <h2>Bootstrap</h2>
                            <progress className="progress progress-info h-3 w-full" value="95" max="100"></progress>
                        </div>

                        <div className="flex-1 pt-10 md:pt-0 flex gap-4 flex-col justify-around items-center"  data-aos="zoom-in-up">
                            <h1 className="text-2xl md:text-3xl pb-4 font-bold underline">Tools</h1>
                            <div className="grid grid-cols-2 gap-16 text-5xl">
                                <IoLogoFirebase className="ease-in-out duration-300 text-[#0DCAF0] hover:scale-110"></IoLogoFirebase>
                                <BsGit className="ease-in-out duration-300 text-[#0DCAF0] hover:scale-110" ></BsGit>
                                <BsGithub className="ease-in-out duration-300 text-[#0DCAF0] hover:scale-110" ></BsGithub>
                                <BiLogoVisualStudio className="ease-in-out duration-300 text-[#0DCAF0] hover:scale-110" ></BiLogoVisualStudio>
                                <BsBrowserChrome className="ease-in-out duration-300 text-[#0DCAF0] hover:scale-110" ></BsBrowserChrome>
                                <IoLogoNpm className="ease-in-out duration-300 text-[#0DCAF0] hover:scale-110" ></IoLogoNpm>
                            </div>
                        </div>
                    </div>

                </main>

            </div>
        </div>
    );
};

export default Skills;