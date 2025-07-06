import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './components/PaginaPrincipal/Layout';
import ChatbotForm from './components/chatbot/ChatbotForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Layout />} />
            <Route path="/crear-chatbot" element={<ChatbotForm />} />
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
