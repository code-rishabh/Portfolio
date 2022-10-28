const AboutSection = () => {
    return (
        <section className=" flex flex-col justify-center gap-24 min-h-screen px-10 py-20 w-full bg-neutral-900">
            <div className="text-neutral-500 text-9xl text-center"><span className="text-orange-500">A</span>bout<span className="text-neutral-800">Me</span></div>
            <div className="flex gap-16 items-center shadow-xl shadow-black justify-center rounded-r-xl w-auto pr-5 m-auto">
                <img className="h-96 shadow-xl shadow-black rounded-l-xl bg-neutral-500" src="/me-001.jpg" alt="myImage" />
                <div className="flex flex-col w-96 text-yellow-50 gap-5 text-lg">
                    <p>My name is <span className="text-orange-500 text-2xl">Rishabh Sharma</span></p>
                    <p className="leading-8">I am Frontend Developer and I am very passionate and dedicated to my work. I have acquired the skills and knowledge neccessary to make your project a success. I enjoy every step of design and development process from discussion and collaboration to concept and excution. I find the most satisfaction in seeing the finised product do everything for you that it was created to do.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;