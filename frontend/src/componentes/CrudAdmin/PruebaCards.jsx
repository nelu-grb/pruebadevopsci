import React, { useState } from 'react';
import Navbar from './Layouts/Navbar';
import { TableUsuarios } from './CrudAdmin/TableUsuarios';
import { TableProductos } from './CrudAdmin/TableProductos'; 
import Footer from "./Layouts/Footer";
import { PruebaCards } from "./CrudAdmin/PruebaCards";

export const CrudAdmin = () => {
  // Estado para controlar qué pestaña ve el usuario en el menú lateral
  const [vistaActual, setVistaActual] = useState('despachos'); 

  // Función que decide qué componente se dibuja en el espacio blanco de la derecha
  const renderContenidoCentral = () => {
    switch (vistaActual) {
      case 'usuarios':
        return (
          <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <TableUsuarios />
          </div>
        );
      case 'productos':
        return (
          <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <TableProductos />
          </div>
        );
      case 'configuracion':
        return (
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 m-4 font-bold text-gray-700">
            ⚙️ Panel de Configuración del Sistema
          </div>
        );
      
      case 'despachos':
      default:
        return (
          // Este div w-full le da la fuerza a PruebaCards para que sus tablas se estiren al 100%
          <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 overflow-x-auto">
            <PruebaCards />
          </div>
        );
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen w-full font-sans antialiased">
      {/* Barra de Navegación Lateral */}
      <Navbar vistaActual={vistaActual} setVistaActual={setVistaActual} />
      
      {/* Contenedor Principal de Contenido (Lado Derecho) */}
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-grow p-8 flex justify-center">
          {renderContenidoCentral()}
        </main>
        
        {/* Footer al final */}
        <Footer />
      </div>
    </div>
  );
};