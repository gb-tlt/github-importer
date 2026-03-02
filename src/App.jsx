import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import FitCohort from './pages/FitCohort'
import OneOnOne from './pages/OneOnOne'
import LifeCoaching from './pages/LifeCoaching'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import ScrollToTop from './components/ui/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/fit-cohort" element={<FitCohort />} />
          <Route path="/services/one-on-one" element={<OneOnOne />} />
          <Route path="/services/life-coaching" element={<LifeCoaching />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
