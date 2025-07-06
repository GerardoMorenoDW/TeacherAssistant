import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './components/PaginaPrincipal/Layout';
import ChatActividades from './components/Actividades/PageActividades'
import Home from './components/PaginaPrincipal/Home';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/crear-actividades" element={<ChatActividades />} />
            <Route path="/chatbots" element={<div>Listado</div>} />
            <Route path="/reportes" element={<div>Reportes</div>} />
            <Route path="/configuracion" element={<div>Configuración</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
