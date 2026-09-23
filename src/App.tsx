import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { aulas } from './aulas/aulas'
import Menu from './pages/Menu'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        {aulas.map((aula) => (
          <Route key={aula.id} path={`/${aula.id}/*`} element={aula.element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
