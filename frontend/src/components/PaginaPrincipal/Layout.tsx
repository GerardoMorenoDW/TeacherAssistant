import React from 'react';
import Sidebar from './SideBar';
import Secciones from './Secciones';

const Layout = () => {
    return(
        <>
            <main className="flex-1 p-6 min-h-screen">
                <Sidebar />
                <h1>Bienvenido a la página principal</h1>
                <div className="card">
                <p>
                    Aqui puedes visualizar informacion relevante
                </p>
                <Secciones />
                </div>
            </main>
      </>
    )
}
export default Layout;