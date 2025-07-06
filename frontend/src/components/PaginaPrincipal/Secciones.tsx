import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRobot, FaListUl, FaChartBar, FaCog } from 'react-icons/fa';

const Secciones = () => {
  //const navigate = useNavigate();

  const sections = [
    {
      title: 'Crear Chatbot',
      description: 'Configura un nuevo chatbot personalizado.',
      path: '/crear-chatbot',
      color: 'bg-indigo-600',
      icon: <FaRobot size={28} />,
      badge: 'Nuevo',
    },
    {
      title: 'Lista de Chatbots',
      description: 'Visualiza, edita o elimina tus chatbots.',
      path: '/chatbots',
      color: 'bg-blue-600',
      icon: <FaListUl size={28} />,
    },
    {
      title: 'Reportes',
      description: 'Revisa métricas y conversaciones.',
      path: '/reportes',
      color: 'bg-green-600',
      icon: <FaChartBar size={28} />,
    },
    {
      title: 'Configuración',
      description: 'Ajusta preferencias de la plataforma.',
      path: '/configuracion',
      color: 'bg-gray-700',
      icon: <FaCog size={28} />,
    },
  ];

  return (
    <div className="min-h-screen py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Secciones apps</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`relative rounded-xl p-6 shadow-md text-white transition-transform hover:scale-[1.03] hover:shadow-lg ${section.color}`}
          >
            {/* Badge "Nuevo" */}
            {section.badge && (
              <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">
                {section.badge}
              </span>
            )}

            {/* Ícono */}
            <div className="mb-4">{section.icon}</div>

            {/* Título y descripción */}
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <p className="text-sm text-white/90 mb-4">{section.description}</p>

            {/* Botón */}
            <button
              //onClick={() => navigate(section.path)}
              className="mt-auto bg-white text-black text-sm px-4 py-1.5 rounded-md font-semibold hover:bg-gray-200 transition"
            >
              Ir →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Secciones;
