import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Events from './components/Events'
import Contact from './components/Contact'
import Footer from './components/Footer'

// NEW PAGES
import Board from './pages/Board'
import Domains from './pages/Domains'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
            {/* Landing Page (Scroll-based) */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Events />
                  <Contact />
                </>
              }
            />

            {/* Separate Pages */}
            <Route path="/board" element={<Board />} />
            <Route path="/domains" element={<Domains />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App