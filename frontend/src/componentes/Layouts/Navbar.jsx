import React from 'react';

function Navbar({ vistaActual, setVistaActual }) {
  return (
    <nav className="rounded-xl w-[250px] min-h-[880px] bg-teal-600 text-white sticky top-0 p-4 m-4">
      {/* Logo o título - Al pincharlo vuelve al Dashboard de Despachos */}
      <h2 
        onClick={() => setVistaActual('despachos')} 
        className="text-xl font-bold mb-8 cursor-pointer hover:text-teal-200 transition-colors"
      >
        Despacho Dashboard
      </h2>

      {/* Menú de navegación */}
      <ul className="space-y-3">
        <li>
          <button
            onClick={() => setVistaActual('usuarios')}
            className={`w-full text-left block font-bold py-2 px-3 rounded transition-colors ${
              vistaActual === 'usuarios' ? 'bg-teal-800' : 'hover:bg-teal-700'
            }`}
          >
            Usuarios
          </button>
        </li>
        <li>
          <button
            onClick={() => setVistaActual('productos')}
            className={`w-full text-left block font-bold py-2 px-3 rounded transition-colors ${
              vistaActual === 'productos' ? 'bg-teal-800' : 'hover:bg-teal-700'
            }`}
          >
            Productos
          </button>
        </li>
        <li>
          <button
            onClick={() => setVistaActual('configuracion')}
            className={`w-full text-left block font-bold py-2 px-3 rounded transition-colors ${
              vistaActual === 'configuracion' ? 'bg-teal-800' : 'hover:bg-teal-700'
            }`}
          >
            Configuración
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
