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
        return <div className="p-6 bg-white rounded-xl shadow">⚙️ Panel de Configuración</div>;
      case 'despachos':
      default:
        return (
          <>
            {/* Aquí van tus dos tarjetas actuales de "Consultar OC" y "Revisar Despachos" */}
            {/* Y aquí abajo pones tu <TableDespachos /> actual */}
          </>
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
