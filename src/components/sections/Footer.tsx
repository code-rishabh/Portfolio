import { SiLinkedin, SiGithub, SiTwitter } from 'react-icons/si'

const Footer = () => {
    return (
        // <section className="py-5 px-40 bg-gradient-to-b from-orange-600 to-orange-800 w-full">
        <section className="py-10 px-40 text-center bg-neutral-800 w-full">
            <div className='flex flex-col gap-20'>
                <div className='flex flex-col gap-6'>
                    <div className="flex flex-col text-8xl text-center text-neutral-300">
                        <p className='text-neutral-400'><span className='text-orange-500'>c</span>ontact<span className='text-neutral-900'>Me</span></p>
                    </div>
                    <div>
                        <a className=" shadow-xl shadow-neutral-900 bg-gradient-to-r from-orange-700 to-orange-500 text-xl px-8 py-2 rounded-md text-white" href="mailto:r08s2001@gmail.com">Email</a>
                    </div>
                </div>
                <div className="flex flex-col text-5xl gap-10">
                    <p className='text-neutral-300 text-4xl'>Also, find me on...</p>
                    <div className='flex m-auto gap-20'>
                        <a className='text-white' target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/rishabh-sharma-9864741b8/"><SiLinkedin /></a>
                        <a className='text-white' target='_blank' rel='noreferrer' href="https://github.com/code-rishabh"><SiGithub /></a>
                        <a className='text-white' target='_blank' rel='noreferrer' href="https://twitter.com/iamRissu"><SiTwitter /></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
