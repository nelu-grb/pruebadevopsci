-- Forzar a la base de datos a resetear el contador auto-incremental a 1 siempre
ALTER TABLE venta AUTO_INCREMENT = 1;

INSERT INTO venta (direccion_compra, valor_compra, fecha_compra, despacho_generado) VALUES 
('Av. Vicuña Mackenna 4860, San Joaquín', 25990.00, '2026-05-15', 1),
('Pasaje El Romeral 124, La Florida', 12450.00, '2026-05-16', 1),
('Calle Las Brisas 890, Puente Alto', 45800.00, '2026-05-16', 1),
('Av. Américo Vespucio 1501, Cerrillos', 89990.00, '2026-05-16', 1),
('Gran Avenida 6540, La Cisterna', 35400.00, '2026-05-16', 1),
('Av. Providencia 1420, Depto 402, Providencia', 7500.00, '2026-05-16', 0),
('Condominio Los Alerces Casa 12, Peñalolén', 19990.00, '2026-05-16', 0),
('Alameda 340, Santiago Centro', 15490.00, '2026-05-17', 0),
('Av. Las Condes 11200, Las Condes', 120500.00, '2026-05-17', 0),
('Calle Pajaritos 2450, Maipú', 28990.00, '2026-05-17', 0),
('San Diego 1025, Santiago Centro', 9990.00, '2026-05-17', 0),
('Av. Vitacura 4500, Vitacura', 150000.00, '2026-05-17', 0),
('Los Carrera 450, Quilpué', 42300.00, '2026-05-17', 0),
('Av. Recoleta 230, Recoleta', 18500.00, '2026-05-17', 0),
('Pasaje Las Torres 8920, Pudahuel', 22490.00, '2026-05-17', 0),
('Av. Independencia 1425, Independencia', 31200.00, '2026-05-17', 0),
('Calle El Líbano 4510, Macul', 13990.00, '2026-05-17', 0),
('Av. Larraín 6700, La Reina', 54990.00, '2026-05-17', 0),
('Camino Central 120, Lo Barnechea', 210000.00, '2026-05-17', 0),
('Av. Marathon 1230, Ñuñoa', 47800.00, '2026-05-17', 0);