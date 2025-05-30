import React from 'react'
import Hero from './components/Hero'
import TopCatalogue from './components/TopCatalogue'
import AboutEnvy from './components/WhoUs'
import EvanCollectionsCTA from './components/EvanCollectionsCTA'
import WebsiteFooter from './components/Footer'
import TestimonialsSection from './components/TestimonialsSection'
import './App.css'

function App() {

  return (
    <div>
      <Hero />
     <TopCatalogue/>
     <AboutEnvy/>
      <EvanCollectionsCTA/>
      <TestimonialsSection/>
      <WebsiteFooter/>
    </div>
  )
}

export default App
