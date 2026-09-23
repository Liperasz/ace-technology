import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Profile from './pages/Profile'

function App() {
  return (
    <div className="bg-cloud flex flex-col min-h-screen font-inter">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route index element={<Home />} />
          {/* Uma rota só cobre droid, laptop e sunglasses via :slug */}
          <Route path=":slug" element={<ProductPage />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
