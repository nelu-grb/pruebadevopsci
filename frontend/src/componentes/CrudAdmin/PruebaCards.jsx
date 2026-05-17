import React, { useState } from 'react';
// Importamos tus tablas hijas modulares
import { TableCompras } from './TableCompras';
import { TableDespachos } from './TableDespachos';
// Importamos tus formularios que ya creaste en tu árbol de archivos
import { FormDespacho } from './FormDespacho'; 
import { FormCierreDespacho } from './FormCierreDespacho';

export const PruebaCards = () => {
  // Estado local para saber qué sub-tabla mostrar en el panel de despachos
  const [subVista, setSubVista] = useState('ninguna'); // 'compras', 'despachos' o 'ninguna'
  
  // Estado opcional para abrir formularios de acción rápida si lo requieres
  const [mostrarFormulario, setMostrarFormulario] = useState(null); // 'crear', 'modificar' o null

  return (
    <div className="w-full space-y-8">
      
      {/* 📊 SECCIÓN DE TARJETAS (Las que ya tienes visualmente en tu pantalla) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Tarjeta 1: Órdenes de Compra */}
        <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-800">Consultar Ordenes de compra 💰</h3>
          </div>
          <p className="text-gray-500 mb-6 text-sm leading-relaxed">
            Revisa las últimas oc realizadas para generar su despacho
          </p>
          <div className="flex gap-3">
            <button 
              onClick={() => { setSubVista('compras'); setMostrarFormulario(null); }}
              className="px-6 py-2.5 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl text-sm transition-colors shadow-sm"
            >
              Consultar →
            </button>
            <button 
              onClick={() => setMostrarFormulario('crear')}
              className="px-4 py-2.5 bg-teal-50 hover:bg-teal-100 text-teal-700 font-semibold rounded-xl text-sm transition-colors"
            >
              + Asignar Camión
            </button>
          </div>
        </div>

        {/* Tarjeta 2: Órdenes de Despacho */}
        <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-800">Revisar Ordenes de despacho 🚚</h3>
          </div>
          <p className="text-gray-500 mb-6 text-sm leading-relaxed">
            Consulta los despachos realizados, modifica los registros de intentos o cierra la orden
          </p>
          <div className="flex gap-3">
            <button 
              onClick={() => { setSubVista('despachos'); setMostrarFormulario(null); }}
              className="px-6 py-2.5 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl text-sm transition-colors shadow-sm"
            >
              Consultar →
            </button>
            <button 
              onClick={() => setMostrarFormulario('modificar')}
              className="px-4 py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-700 font-semibold rounded-xl text-sm transition-colors"
            >
              ✏️ Modificar Intentos
            </button>
          </div>
        </div>

      </div>

      {/* 📝 SECCIÓN DINÁMICA DE FORMULARIOS (Aparecen solo si presionas los botones secundarios) */}
      {mostrarFormulario === 'crear' && (
        <div className="p-6 bg-teal-50/50 rounded-2xl border border-teal-100 animate-fadeIn">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-bold text-teal-800">🚚 Formulario de Asignación Logística (POST)</h4>
            <button onClick={() => setMostrarFormulario(null)} className="text-gray-400 hover:text-gray-600">✕ Cerrar</button>
          </div>
          <FormDespacho onSuccess={() => { setMostrarFormulario(null); setSubVista('despachos'); }} />
        </div>
      )}

      {mostrarFormulario === 'modificar' && (
        <div className="p-6 bg-amber-50/50 rounded-2xl border border-amber-100 animate-fadeIn">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-bold text-amber-800">✏️ Registro de Intentos y Cierre (PUT)</h4>
            <button onClick={() => setMostrarFormulario(null)} className="text-gray-400 hover:text-gray-600">✕ Cerrar</button>
          </div>
          <FormCierreDespacho onSuccess={() => { setMostrarFormulario(null); setSubVista('despachos'); }} />
        </div>
      )}

      {/* 📉 ZONA DE RENDERIZADO DE TABLAS COMPONENTES (Tus archivos reales) */}
      <div className="w-full mt-6 bg-white rounded-2xl transition-all duration-300">
        {subVista === 'compras' && <TableCompras />}
        {subVista === 'despachos' && <TableDespachos />}
        
        {subVista === 'ninguna' && !mostrarFormulario && (
          <div className="text-center p-10 text-gray-400 border-2 border-dashed border-gray-100 rounded-2xl">
            Haz clic en "Consultar" en cualquiera de las tarjetas superiores para cargar los reportes transaccionales de la base de datos de AWS.
          </div>
        )}
      </div>

    </div>
  );
};