import { useRef } from 'react'
import Card from '../components/Card';
import CopyEmailButton from '../components/CopyEmailButton';

const About = () => {
    const grid2Container = useRef();

    return (
        <section className="c-space section-spacing">
            <h2 className="text-heading">About Me</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">

                {/* Grid 1 */}
                <div className="flex items-end grid-default-color grid-1">
                    <img
                        src="assets/coding-pov.png"
                        className="absolute scale-[1.75] -right-20 -top-4 md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
                    />
                    <div className="z-10">
                        <p className='headtext'>Hi, I'm Prince Kumar</p>
                        <p className='subtext'>
                            Over the last 1.5 years, I developed my frontend and
                            backend dev skills to deliver dynamic and responsive web applications.
                        </p>
                    </div>
                    <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-linear-to-t from-indigo' />
                </div>

                {/* Grid 2 */}
                <div className="grid-default-color grid-2">
                    <div ref={grid2Container}
                        className="flex items-center justify-center w-full h-full">
                        <p className="flex items-end text-5xl text-gray-500">
                            CODE IS CRAFT
                        </p>
                        <Card
                            style={{ rotate: "75deg", top: "30%", left: "20%" }}
                            text="GRASP"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-30deg", top: "60%", left: "45%" }}
                            text="SOLID"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
                            text="Design Patterns"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-45deg", top: "55%", left: "0%" }}
                            text="Design Principles"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "20deg", top: "10%", left: "38%" }}
                            text="SRP"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "30deg", top: "70%", left: "70%" }}
                            image="assets/logos/csharp-pink.png"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-45deg", top: "70%", left: "25%" }}
                            image="assets/logos/dotnet-pink.png"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-45deg", top: "5%", left: "10%" }}
                            image="assets/logos/blazor-pink.png"
                            containerRef={grid2Container}
                        />
                    </div>
                </div>

                {/* Grid 3 */}
                <div className="grid-black-color grid-3 relative flex items-center justify-center overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>

                    {/* Main Content */}
                    <div className="relative z-10 text-center">
                        <p className="headtext">Tech Stack</p>
                        <p className="subtext mb-6">Tools I use to build scalable apps</p>

                        {/* Tech Badges */}
                        <div className="flex flex-wrap justify-center gap-3">

                            {/* Badge */}
                            <span className="px-4 py-2 text-sm bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition">
                                React
                            </span>

                            <span className="px-4 py-2 text-sm bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition">
                                Redux Toolkit
                            </span>

                            <span className="px-4 py-2 text-sm bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition">
                                Node.js
                            </span>

                            <span className="px-4 py-2 text-sm bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition">
                                Express
                            </span>

                            <span className="px-4 py-2 text-sm bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition">
                                MongoDB
                            </span>

                            <span className="px-4 py-2 text-sm bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition">
                                Tailwind
                            </span>

                            <span className="px-4 py-2 text-sm bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition">
                                JavaScript
                            </span>

                            <span className="px-4 py-2 text-sm bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition">
                                TypeScript
                            </span>

                        </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-5 left-5 w-12 h-12 bg-indigo-500/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-5 right-5 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"></div>

                </div>

                {/* Grid 4 */}
                <div className="grid-special-color grid-4">
                    <div className="flex flex-col items-center justify-center size-full gap-4">
                        <p className='text-center headtext'>
                            Do you want to start a project together?
                        </p>
                        <CopyEmailButton />
                    </div>
                </div>

                {/* Grid 5 */}
                <div className="grid-default-color grid-5"></div>

            </div>
        </section>
    )
}

export default About;