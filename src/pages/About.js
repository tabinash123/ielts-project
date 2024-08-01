import React from 'react'
import PrincipalMessage from '../components/about/PrincipalMessage'
import MissionVision from '../components/about/MissionVision'
import PhotoGallery from '../components/PhotoGallery'
import MontessoriProcessFlow from './../components/about/MontessoriProcessFlow';


const About = () => {
  return (
      <>
      <PrincipalMessage />
      <MissionVision />
      <PhotoGallery />
      <MontessoriProcessFlow />
      </>
  )
}

export default About