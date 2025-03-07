import LandingPage from './LandingPage'
import GetSyarted from './components/Pages/GetSyarted'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/getstarted" element={<GetSyarted />} />
      </Routes>
    </Router>
  )
}

export default App
