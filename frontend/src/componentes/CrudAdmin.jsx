import React, { useState } from 'react';
import Navbar from './Layouts/Navbar';
import { TableDespachos } from './CrudAdmin/TableDespachos';
import { TableUsuarios } from './CrudAdmin/TableUsuarios';
import { TableProductos } from './CrudAdmin/TableProductos'; 
import Footer from "./Layouts/Footer";
import { PruebaCards } from "./CrudAdmin/PruebaCards";
import Reviews from "./Layouts/Reviews";

export const CrudAdmin = () => {
  // Estado para controlar qué pestaña ve el usuario en el centro
  const [vistaActual, setVistaActual] = useState('despachos'); 

  // Función que decide qué componente se dibuja en el espacio blanco
 const renderContenidoCentral = () => {
  switch (vistaActual) {
    case 'usuarios':
      return (
        <div className="w-full">
          <TableUsuarios />
        </div>
      );
    case 'productos':
      return (
        <div className="w-full">
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
        <div className="w-full space-y-8">
          
          {/* 1. Renderiza tus tarjetas originales con sus funciones onClick intactas */}
          <div className="w-full">
            <PruebaCards />
          </div>

          {/* 2. Mantiene la tabla estirada al 100% como querías */}
          <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 overflow-x-auto">
            <TableDespachos />
          </div>

          {/* 3. Módulo de Reviews */}
          <div className="w-full">
            <Reviews />
          </div>

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
        <main className="flex-grow p-8">
          {renderContenidoCentral()}
        </main>
        
        {/* Footer al final de la página */}
        <Footer />
      </div>
    </div>
  );
};