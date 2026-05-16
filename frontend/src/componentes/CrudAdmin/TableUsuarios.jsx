import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const TableUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL_BASE}/usuarios`)
      .then(res => setUsuarios(res.data || []))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md m-4">
      <h2 className="text-2xl font-bold mb-4 text-teal-600">Usuarios Registrados (Ventas)</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b bg-teal-50">
            <th className="p-3">ID</th>
            <th className="p-3">Username</th>
            <th className="p-3">Email</th>
            <th className="p-3">Rol</th>
            <th className="p-3">Estado</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(u => (
            <tr key={u.id} className="border-b hover:bg-gray-50">
              <td className="p-3 font-semibold">{u.id}</td>
              <td className="p-3">{u.username}</td>
              <td className="p-3 text-gray-600">{u.email}</td>
              <td className="p-3"><span className="px-2 py-1 bg-gray-100 rounded text-xs font-bold text-teal-800">{u.rol}</span></td>
              <td className="p-3">{u.activo ? "🟢 Activo" : "🔴 Inactivo"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};