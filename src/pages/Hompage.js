import React from 'react'
import MKWBlog from '../components/MKWBlog'
import DifferenceSection from '../components/DifferenceSection'
import ParentTestimonials from '../components/ParentTestimonials'
import DevelopmentalActivities from '../components/DevelopmentalActivities'
import Inroduction from '../components/Introduction'
import QuickContact from '../components/QuickContact';
import PhotoGallery from '../components/PhotoGallery'
import FAQ from '../components/FAQ'
import Admissions from '../components/Admissions'


const App = () => {
  return (
    <>
      <Inroduction />
      <Admissions />
      <DifferenceSection />
      <DevelopmentalActivities />
      <ParentTestimonials />
      <PhotoGallery />
      {/* <MKWBlog /> */}
      <FAQ />
      <QuickContact />
    </>
  )
}

export default App