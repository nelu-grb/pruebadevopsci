import React, { useState } from 'react';
import Navbar from './Layouts/Navbar';
import { TableDespachos } from './CrudAdmin/TableDespachos';
import { TableUsuarios } from './CrudAdmin/TableUsuarios';
import { TableProductos } from './CrudAdmin/TableProductos'; 



export const CrudAdmin = () => {
  // Estado para controlar qué pestaña ve el usuario en el centro
  const [vistaActual, setVistaActual] = useState('despachos'); 

  // Función que decide qué componente se dibuja en el espacio blanco
const renderContenidoCentral = () => {
  switch (vistaActual) {
    case 'usuarios':
      return <TableUsuarios />;
    case 'productos':
      return <TableProductos />;
    case 'configuracion':
      return <div className="p-6 bg-white rounded-xl shadow m-4">⚙️ Panel de Configuración</div>;
    
    // RETORNAMOS TUS BOTONES ORIGINALES AQUÍ
    case 'despachos':
    default:
      return (
        <div className="p-4">
          {/* Contenedor de las dos Tarjetas Superiores */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            {/* Tarjeta 1: Ventas */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Consultar Ordenes de compra 💰</h3>
              <p className="text-gray-500 text-sm mb-6">Revisa las últimas oc realizadas para generar su despacho</p>
              <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded-xl transition-colors">
                Consultar ➔
              </button>
            </div>

            {/* Tarjeta 2: Despachos */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Revisar Ordenes de despacho 🚚</h3>
              <p className="text-gray-500 text-sm mb-6">Consulta los despachos realizados, modifica los registros de intentos o cierra la orden</p>
              <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded-xl transition-colors">
                Consultar ➔
              </button>
            </div>

          </div>

          {/* Tabla Grande de Despachos en el Centro (Tu componente actual) */}
          <div className="mt-6">
            <TableDespachos />
          </div>
        </div>
      );
  }
};

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Le pasamos el estado al Navbar para que pueda cambiarlo */}
      <Navbar vistaActual={vistaActual} setVistaActual={setVistaActual} />
      
      {/* El contenido de la derecha cambia automáticamente */}
      <div className="flex-1 p-4">
        {renderContenidoCentral()}
      </div>
    </div>
  );
};
