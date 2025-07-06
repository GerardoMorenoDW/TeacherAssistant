import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRobot, FaListUl, FaChartBar, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  const navItems = [
    { label: 'Crear Chatbot', path: '/crear-chatbot', icon: <FaRobot /> },
    { label: 'Lista de Chatbots', path: '/chatbots', icon: <FaListUl /> },
    { label: 'Reportes', path: '/reportes', icon: <FaChartBar /> },
    { label: 'Configuración', path: '/configuracion', icon: <FaCog /> },
  ];

  return (
    <div className="min-h-screen w-64 bg-gray-900 text-white flex flex-col p-4 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">SaaS IA</h2>

      <nav className="flex flex-col gap-2">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition ${
                isActive ? 'bg-gray-700' : 'hover:bg-gray-800'
              }`
            }
          >
            <span>{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
