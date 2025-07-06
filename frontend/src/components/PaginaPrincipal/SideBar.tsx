import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRobot, FaListUl, FaChartBar, FaCog } from 'react-icons/fa';
import { MdOutlineVolunteerActivism } from 'react-icons/md';
import { GoChecklist } from 'react-icons/go';

const Sidebar = () => {
  const navItems = [
      {
        title: 'Crear Actividades',
        description: 'Crea diferentes actividades, trabajos en clase y tareas.',
        path: '/crear-actividades',
        color: 'bg-indigo-600',
        icon: <MdOutlineVolunteerActivism size={28} />,
        badge: 'Nuevo',
      },
      {
        title: 'Creacion de Tests',
        description: 'Genera partes concretas o test completos.',
        path: '/chatbots',
        color: 'bg-blue-600',
        icon: <GoChecklist size={28} />,
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
    <div className="min-h-screen w-64 bg-gray-900 text-white flex flex-col p-4 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center"><NavLink to='/'>Teacher Assistant</NavLink></h2>

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
            <span className="text-sm font-medium">{item.title}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
