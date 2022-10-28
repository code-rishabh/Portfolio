// import Footer from "./Footer";

const IntroSection = () => {
    return (
        <section className="min-h-screen py-5 px-40 bg-neutral-800 w-full">
            <div className="flex flex-col gap-40">
                <nav className="flex text-white items-center justify-between">
                    <h1 className="  text-3xl text-orange-600"> <span className="text-white">Rishabh</span>Sharma</h1>
                    <div className="flex">
                        <h1 className="text-3xl"> <b className="text-orange-600 text-4xl">P</b>ortfolio</h1>
                    </div>
                    <a target='_blank' rel='noreferrer' className="text-lg shadow-xl shadow-neutral-900 bg-gradient-to-r from-orange-700 to-orange-500 px-4 py-2 rounded-md" href="https://drive.google.com/file/d/1rFK3dGFWArXpJl_mbFvbfXg2IS_9yqbR/view">Resume</a>
                </nav>
                <div className="flex flex-col pt-10 text-9xl gap-3 items-start">
                    <p className="text-neutral-600 text-7xl">I am a</p>
                    <h1 className="text-white">FRONTEND</h1>
                    {/* <h1 className="bg-gradient-to-r from-orange-700 to-orange-500 px-4 rounded-3xl">FRONTEND</h1> */}
                    {/* <h1 className="text-white">DEVELOPER<span className="text-orange-500">.</span></h1> */}
                    <h1 className=" shadow-xl shadow-neutral-900 bg-gradient-to-r from-orange-700 to-orange-500 px-4 rounded-2xl">DEVELOPER.</h1>
                    {/* <a className="bg-gradient-to-r from-orange-700 to-orange-500 px-4 py-2 rounded-md text-xl" href="#">CONTACT ME</a> */}
                    <a className="shadow-xl shadow-neutral-900 text-xl text-white px-4 py-2 bg-neutral-700 rounded-md" href="mailto:r08s2001@gmail.com">CONTACT ME</a>
                </div>
            </div>
        </section>
    );
}

export default IntroSection;
