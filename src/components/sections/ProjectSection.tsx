const ProjectSection = () => {
    return (
        <section className=" flex flex-col items-center justify-center gap-24 min-h-screen px-10 py-20 w-full bg-neutral-900">
            <div className=" text-neutral-500 text-8xl text-center"><span className="bg-gradient-to-b text-transparent bg-clip-text from-orange-900 to-orange-500">recent</span>Projects</div>
            <div className="flex flex-col w-[75%] gap-10">
                <div className="flex flex-[0.5]  gap-10">
                    <div className="flex flex-col gap-10 p-10 flex-[0.33] w-full text-white shadow-lg shadow-black rounded-xl">
                        <p className="text-3xl text-neutral-400 text-center">WEB3 Project</p>
                        <p>Built my own DAO using Javascript and recieved an NFT</p>
                        <a target="_blank" rel="noreferrer" className=" text-center text-xl text-white px-4 py-2 bg-neutral-700 px-4 py-2 rounded-md shadow-xl shadow-black" href="https://buildspace-dao-starter-mocha.vercel.app/">Visit</a>
                    </div>
                    <div className="flex flex-col gap-10 p-10 flex-[0.33] w-full text-white shadow-lg shadow-black rounded-xl">
                        <p className="text-3xl text-neutral-400 text-center">WEB3 Project</p>
                        <p>Built a WEB3 app on Solana with Reactjs and Rust</p>
                        <a target="_blank" rel="noreferrer" className=" text-center text-xl text-white px-4 py-2 bg-neutral-700 px-4 py-2 rounded-md shadow-xl shadow-black" href="https://gif-portal-starter-six.vercel.app/">Visit</a>
                    </div>
                    <div className="flex flex-col gap-10 p-10 flex-[0.33] w-full text-white shadow-lg shadow-black rounded-xl">
                        <p className="text-3xl text-neutral-400 text-center">Ello - Chat App</p>
                        <p>Built a modern day chat app using SocketIO and Reactjs</p>
                        <a target="_blank" rel="noreferrer" className=" text-center text-xl text-white px-4 py-2 bg-neutral-700 px-4 py-2 rounded-md shadow-xl shadow-black" href="https://ello.vercel.app/">Visit</a>
                    </div>
                </div>

                <div className="flex flex-[0.5] gap-10">
                    <div className="flex flex-col gap-10 p-10 flex-[0.5]  w-full text-white shadow-lg shadow-black rounded-xl">
                        <p className="text-3xl text-neutral-400 text-center">E-commerce Website</p>
                        <p>Built an e-commerce website using HTML, CSS, Bootstrap, MySQL and PHP</p>
                        <a target="_blank" rel="noreferrer" className=" text-center text-xl text-white px-4 py-2 bg-neutral-700 px-4 py-2 rounded-md shadow-xl shadow-black" href="https://vercel.com/code-rishabh/mobile-shoppee">Visit</a>
                    </div>
                    <div className="flex flex-col gap-10 p-10 flex-[0.5]  w-full text-white shadow-lg shadow-black rounded-xl">
                        <p className="text-3xl text-neutral-400 text-center">Clone Website</p>
                        <p>Built a clone website of renowned website from Solana community <a className="font-mono underline underline-offset-8" target="_blank" rel="noreferrer" href="https://www.startonsolana.com/">startonsolana.com</a></p>
                        <a target="_blank" rel="noreferrer" className=" text-center text-xl text-white px-4 py-2 bg-neutral-700 px-4 py-2 rounded-md shadow-xl shadow-black" href="https://startonsolana-clone.vercel.app/">Cloned Website</a>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default ProjectSection;
