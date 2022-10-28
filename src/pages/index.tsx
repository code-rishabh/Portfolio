import type { NextPage } from 'next'
import Head from 'next/head'
import IntroSection from '../components/sections/IntroSection'
import AboutSection from '../components/sections/AboutSection'
import SkillSection from '../components/sections/SkillSection'
import ProjectSection from '../components/sections/ProjectSection'
import Footer from '../components/sections/Footer'

const Home: NextPage = () => {
  return (
    <div className='scroll-smooth'>
      <Head>
        <title>Rishabh Sharma Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IntroSection/>
      <AboutSection/>
      <SkillSection/>
     <ProjectSection/>
     <Footer/>
    </div>
  )
}

export default Home