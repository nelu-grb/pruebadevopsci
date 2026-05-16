-- =====================================================================
-- REGISTROS PARA LA TABLA DE PRODUCTOS
-- =====================================================================
INSERT INTO productos (nombre, descripcion, precio, stock) VALUES 
('Alimento Cachorro Premium 10kg', 'Sabor pollo, rico en proteínas para razas pequeñas', 19990.00, 15),
('Alimento Adulto Light 8kg', 'Control de peso y cuidado articular, razas medianas', 17990.00, 8),
('Snacks Dentales para Perros', 'Ayuda a la limpieza dental diaria y control de sarro', 5990.00, 30),
('Collar Ajustable Reflectante Rojo', 'Con broche de seguridad de alta resistencia', 4500.00, 12),
('Juguete Hueso de Goma', 'Material no tóxico, ideal para morder y molares', 3800.00, 25),
('Champú Mascotas Pelo Blanco 500ml', 'Extracto de aloe vera para brillo y suavidad extrema', 6490.00, 10),
('Cama Acolchada Impermeable XL', 'Ideal para perros grandes, lavable y base antideslizante', 24990.00, 5),
('Arnés de Paseo Ergonómico Negro', 'Distribuye la presión en el pecho, ideal para entrenamiento', 12990.00, 14),
('Plato Acero Inoxidable Antivuelco', 'Capacidad 1 Litro, base de gomas', 4990.00, 20),
('Arena Sanitaria para Gatos 5kg', 'Aglomerante con aroma a lavanda, control de olores', 7500.00, 18);

-- =====================================================================
-- REGISTROS PARA LA TABLA DE USUARIOS
-- (Campos: username, password, email, rol, activo)
-- =====================================================================
INSERT INTO usuarios (username, password, email, rol, activo) VALUES 
('juan_perez', '123456', 'juan.perez@gmail.com', 'CLIENTE', 1),
('maria_ines', 'admin2026', 'm.ines.munoz@duocuc.cl', 'ADMINISTRADOR', 1),
('nels_baeza', 'nels123', 'nels.baeza@duocuc.cl', 'OPERADOR', 1),
('carlos_oli', 'carlos99', 'carlos.olivares@outlook.com', 'CLIENTE', 1),
('fran_silva', 'fran2026', 'fran.silva@gmail.com', 'CLIENTE', 1),
('seba_cont', 'seba_op', 's.contreras@duocuc.cl', 'OPERADOR', 1);

-- Registros Semilla para las Ventas / Compras
INSERT INTO venta (direccion_compra, valor_compra, fecha_compra, despacho_generado) VALUES 
('Av. Vicuña Mackenna 4860, San Joaquín', 25990.00, '2026-05-15', 1),
('Pasaje El Romeral 124, La Florida', 12450.00, '2026-05-16', 1),
('Calle Las Brisas 890, Puente Alto', 45800.00, '2026-05-16', 1),
('Av. Providencia 1420, Depto 402, Providencia', 7500.00, '2026-05-16', 0),
('Condominio Los Alerces Casa 12, Peñalolén', 19990.00, '2026-05-16', 0);

-- Registros Semilla para los Despachos Realizados
