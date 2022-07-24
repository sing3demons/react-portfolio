import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Education from './Education.jsx'
import Home from './Home.jsx'
import Skills from './Skills.jsx'

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Switch>
    </>
  )
}
