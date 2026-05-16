import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const TableProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL_VENTAS}/productos`)      .then(res => setProductos(res.data || []))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md m-4">
      <h2 className="text-2xl font-bold mb-4 text-teal-600">Catálogo de Productos (Ventas)</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b bg-teal-50">
            <th className="p-3">ID</th>
            <th className="p-3">Nombre</th>
            <th className="p-3">Descripción</th>
            <th className="p-3">Precio</th>
            <th className="p-3">Stock</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(p => (
            <tr key={p.id} className="border-b hover:bg-gray-50">
              <td className="p-3 font-semibold">{p.id}</td>
              <td className="p-3">{p.nombre}</td>
              <td className="p-3 text-gray-600">{p.descripcion}</td>
              <td className="p-3 text-teal-700 font-bold">${p.precio}</td>
              <td className="p-3">{p.stock} u.</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};