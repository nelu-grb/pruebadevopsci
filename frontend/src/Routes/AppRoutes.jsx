import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CrudAdmin } from "../componentes/CrudAdmin.jsx";
import { TableProductos } from '../componentes/CrudAdmin/TableProductos';
import { TableUsuarios } from '../componentes/CrudAdmin/TableUsuarios';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CrudAdmin />} />

        <Route path="/productos" element={<TableProductos />} />
        <Route path="/usuarios" element={<TableUsuarios />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
