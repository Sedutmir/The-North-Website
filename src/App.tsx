import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { TranslationProvider } from 'i18nano'
import translations from './i18n/index.ts'

/* Sections */
import Header from './sections/Header.tsx'
import Footer from './sections/Footer.tsx'

/* Routes */
import Home from './routes/home/Home.tsx'
import Privacy from './routes/privacy/Privacy.tsx'
import Translation from './routes/translation/Translation.tsx'
import Contact from './routes/contact/Contact.tsx'

import './App.css'

export default function App() {
  return (
    <TranslationProvider translations={translations} language='en' fallback='en'>
      <Router>
        <div className='container'>
          <Header />

          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/privacy' element={<Privacy />} />
              <Route path='/translation' element={<Translation />} />
              <Route path='/blog' element={<h1>! ! ! !! BLOG !! ! ! ! </h1>} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </TranslationProvider>
  )
}
