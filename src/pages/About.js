import React from 'react'
import PrincipalMessage from '../components/about/PrincipalMessage'
import MissionVision from '../components/about/MissionVision'
import MontessoriProcessFlow from './../components/about/MontessoriProcessFlow';
import Hero from '../components/about/Hero';
// import TeamSection from '../components/about/TeamSection';


const About = () => {
  return (
    <>
      <Hero />
      <PrincipalMessage />
      <MissionVision />
      <MontessoriProcessFlow />
      {/* <TeamSection /> */}
      </>
  )
}

export default About