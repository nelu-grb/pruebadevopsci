import React, { useState } from 'react';
// 1. IMPORTA TUS TABLAS MODULARES
import { TableCompras } from './TableCompras';
import { TableDespachos } from './TableDespachos';
// 2. IMPORTA TUS FORMULARIOS (Verifica que los nombres de archivo coincidan)
import { FormDespacho } from './FormDespacho'; 
import { FormCierreDespacho } from './FormCierreDespacho';

export const PruebaCards = () => {
  // Estado para controlar qué tabla se muestra abajo ('compras', 'despachos' o 'ninguna')
  const [subVista, setSubVista] = useState('ninguna'); 
  
  // Estado clave para controlar qué formulario se abre en el centro ('crear', 'modificar' o null)
  const [mostrarFormulario, setMostrarFormulario] = useState(null); 

  return (
    <div className="w-full space-y-6">
      
      {/* CONTAINER DE LAS DOS TARJETA PRINCIPALES */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Tarjeta 1: Órdenes de Compra */}
        <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Consultar Ordenes de compra 💰</h3>
          <p className="text-gray-500 mb-6 text-sm">Revisa las últimas oc realizadas para generar su despacho</p>
          <div className="flex gap-3">
            <button 
              onClick={() => { setSubVista('compras'); setMostrarFormulario(null); }}
              className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl text-sm transition-colors"
            >
              Consultar →
            </button>
            <button 
              onClick={() => { setMostrarFormulario('crear'); setSubVista('ninguna'); }}
              className="px-4 py-2 bg-teal-50 hover:bg-teal-100 text-teal-700 font-semibold rounded-xl text-sm transition-colors"
            >
              + Asignar Camión
            </button>
          </div>
        </div>

        {/* Tarjeta 2: Órdenes de Despacho */}
        <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Revisar Ordenes de despacho 🚚</h3>
          <p className="text-gray-500 mb-6 text-sm">Consulta los despachos realizados, modifica los registros de intentos o cierra la orden</p>
          <div className="flex gap-3">
            <button 
              onClick={() => { setSubVista('despachos'); setMostrarFormulario(null); }}
              className="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl text-sm transition-colors"
            >
              Consultar →
            </button>
            <button 
              onClick={() => { setMostrarFormulario('modificar'); setSubVista('ninguna'); }}
              className="px-4 py-2 bg-amber-50 hover:bg-amber-100 text-amber-700 font-semibold rounded-xl text-sm transition-colors border border-amber-200"
            >
              ✏️ Modificar Intentos
            </button>
          </div>
        </div>

      </div>

      {/* 🔄 ZONA CENTRAL DINÁMICA: FORMULARIOS O TABLAS */}
      <div className="w-full mt-6">
        
        {/* CONDICIONAL 1: Formulario Crear Despacho (POST) */}
        {mostrarFormulario === 'crear' && (
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center">
            <div className="w-full flex justify-between items-center mb-4">
              <h4 className="text-lg font-bold text-teal-600">🚚 Asignación Logística de Camiones</h4>
              <button onClick={() => setMostrarFormulario(null)} className="text-gray-400 hover:text-gray-600 text-sm">✕ Cerrar</button>
            </div>
            <FormDespacho onSuccess={() => { setMostrarFormulario(null); setSubVista('despachos'); }} />
          </div>
        )}

        {/* CONDICIONAL 2: Formulario Modificar Despacho (PUT) */}
        {mostrarFormulario === 'modificar' && (
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center">
            <div className="w-full flex justify-between items-center mb-4">
              <h4 className="text-lg font-bold text-amber-600">✏️ Control de Intentos Fallidos</h4>
              <button onClick={() => setMostrarFormulario(null)} className="text-gray-400 hover:text-gray-600 text-sm">✕ Cerrar</button>
            </div>
            <FormCierreDespacho onSuccess={() => { setMostrarFormulario(null); setSubVista('despachos'); }} />
          </div>
        )}

        {/* CONDICIONAL 3: Mostrar Tabla de Compras */}
        {subVista === 'compras' && <TableCompras />}

        {/* CONDICIONAL 4: Mostrar Tabla de Despachos */}
        {subVista === 'despachos' && <TableDespachos />}
        
        {/* MUESTRA EL TEXTO POR DEFECTO SOLO SI NO HAY NADA ACTIVO */}
        {subVista === 'ninguna' && !mostrarFormulario && (
          <div className="text-center p-12 text-gray-400 border-2 border-dashed border-gray-100 rounded-2xl bg-white">
            Haz clic en "Consultar" o en las acciones para cargar los módulos operativos de la base de datos de AWS.
          </div>
        )}
      </div>

    </div>
  );
};