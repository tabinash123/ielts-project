import React from 'react'
// import MKWBlog from '../components/MKWBlog'
import DifferenceSection from '../components/DifferenceSection'
import ParentTestimonials from '../components/ParentTestimonials'
import DevelopmentalActivities from '../components/DevelopmentalActivities'
import Inroduction from '../components/Introduction'
import PhotoGallery from '../components/PhotoGallery'
import FAQ from '../components/FAQ'
import ContactForm from './../components/contact/ContactForm';
import Hero from './../components/Hero';


const App = () => {
  return (
    <>
      <Hero />
      <Inroduction />
      <DifferenceSection />
      <DevelopmentalActivities />
      <ParentTestimonials />
      <PhotoGallery />
      {/* <MKWBlog /> */}
      <FAQ />
    </>
  )
}

export default App