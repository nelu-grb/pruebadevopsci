import React, { useState } from 'react';
import Navbar from './Layouts/Navbar';
import Footer from "./Layouts/Footer";

import { TableDespachos } from './CrudAdmin/TableDespachos';
import { TableUsuarios } from './CrudAdmin/TableUsuarios';
import { TableProductos } from './CrudAdmin/TableProductos'; 
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
          <div className="w-full animate-fadeIn">
            <TableUsuarios />
          </div>
        );
      case 'productos':
        return (
          <div className="w-full animate-fadeIn">
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
          <div className="w-full space-y-8 animate-fadeIn">
            
            {/* Contenedor de las dos Tarjetas Superiores con Grid Balanceado */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Tarjeta 1: Ventas */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-[200px]">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Consultar Ordenes de compra 💰</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Revisa las últimas oc realizadas para generar su despacho
                  </p>
                </div>
                <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-sm shadow-teal-50">
                  Consultar ➔
                </button>
              </div>

              {/* Tarjeta 2: Despachos */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-[200px]">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Revisar Ordenes de despacho 🚚</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Consulta los despachos realizados, modifica los registros de intentos o cierra la orden
                  </p>
                </div>
                <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-sm shadow-teal-50">
                  Consultar ➔
                </button>
              </div>

            </div>

            {/* Contenedor de la Tabla que obliga a expandirse al 100% */}
            <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 overflow-x-auto">
              <TableDespachos />
            </div>

            {/* Módulo de Reviews (Por si va en el inicio) */}
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