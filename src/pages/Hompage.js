import React from 'react'
import MKWBlog from '../components/MKWBlog'
import DifferenceSection from '../components/DifferenceSection'
import ParentTestimonials from '../components/ParentTestimonials'
import DevelopmentalActivities from '../components/DevelopmentalActivities'
import Inroduction from '../components/Introduction'
import QuickContact from '../components/QuickContact';
import PhotoGallery from '../components/PhotoGallery'



const App = () => {
  return (
    <>
      <Inroduction />
      <DifferenceSection />
      <DevelopmentalActivities />
      <ParentTestimonials />
      <PhotoGallery />
      <MKWBlog />
      <QuickContact />
    </>
  )
}

export default App