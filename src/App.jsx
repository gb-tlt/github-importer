import { lazy, Suspense, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ContentProvider } from './contexts/ContentContext'
import { AuthProvider } from './contexts/AuthContext'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import TheWork from './pages/TheWork'
import Services from './pages/Services'
import FitCohort from './pages/FitCohort'
import OneOnOne from './pages/OneOnOne'
import LifeCoaching from './pages/LifeCoaching'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import ScrollToTop from './components/ui/ScrollToTop'

const AdminLayout = lazy(() => import('./admin/AdminLayout'))
const AdminLogin = lazy(() => import('./admin/AdminLogin'))
const AdminDashboard = lazy(() => import('./admin/AdminDashboard'))
const PageEditor = lazy(() => import('./admin/editors/PageEditor'))
const CollectionEditor = lazy(() => import('./admin/editors/CollectionEditor'))

const adminPages = [
  { path: 'home', title: 'Home Page', schemaImport: () => import('./admin/schemas/home').then(m => m.homeSchema) },
  { path: 'about', title: 'About Page', schemaImport: () => import('./admin/schemas/about').then(m => m.aboutSchema) },
  { path: 'the-work', title: 'The Work Page', schemaImport: () => import('./admin/schemas/theWork').then(m => m.theWorkSchema) },
  { path: 'services', title: 'Services Page', schemaImport: () => import('./admin/schemas/services').then(m => m.servicesSchema) },
  { path: 'fit-cohort', title: 'F.I.T. Cohort', schemaImport: () => import('./admin/schemas/fitCohort').then(m => m.fitCohortSchema) },
  { path: 'one-on-one', title: 'One-on-One', schemaImport: () => import('./admin/schemas/oneOnOne').then(m => m.oneOnOneSchema) },
  { path: 'life-coaching', title: 'Life Coaching', schemaImport: () => import('./admin/schemas/lifeCoaching').then(m => m.lifeCoachingSchema) },
  { path: 'resources', title: 'Resources', schemaImport: () => import('./admin/schemas/resources').then(m => m.resourcesSchema) },
  { path: 'contact', title: 'Contact', schemaImport: () => import('./admin/schemas/contact').then(m => m.contactSchema) },
  { path: 'global', title: 'Global Settings', schemaImport: () => import('./admin/schemas/global').then(m => m.globalSchema) },
]

function LazyPageEditor({ pageName, title, schemaImport }) {
  const [schema, setSchema] = useState(null)
  useEffect(() => { setSchema(null); schemaImport().then(setSchema) }, [schemaImport])
  if (!schema) return <div className="text-slate-300">Loading...</div>
  return <PageEditor pageName={pageName} schema={schema} title={title} />
}

function App() {
  return (
    <ContentProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen bg-navy-950 flex items-center justify-center text-gold-400 font-display text-xl">Loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/the-work" element={<TheWork />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/fit-cohort" element={<FitCohort />} />
                <Route path="/services/one-on-one" element={<OneOnOne />} />
                <Route path="/services/life-coaching" element={<LifeCoaching />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/contact" element={<Contact />} />
              </Route>
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                {adminPages.map(({ path, title, schemaImport }) => (
                  <Route
                    key={path}
                    path={path}
                    element={<LazyPageEditor pageName={path === 'fit-cohort' ? 'fitCohort' : path === 'one-on-one' ? 'oneOnOne' : path === 'life-coaching' ? 'lifeCoaching' : path === 'the-work' ? 'theWork' : path} title={title} schemaImport={schemaImport} />}
                  />
                ))}
                <Route path="collections" element={<CollectionEditor />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </AuthProvider>
    </ContentProvider>
  )
}

export default App
