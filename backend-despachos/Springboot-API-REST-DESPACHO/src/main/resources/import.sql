-- Forzar a la base de datos a resetear el contador auto-incremental a 1 siempre
ALTER TABLE despacho AUTO_INCREMENT = 1;

-- Mapeo exacto amarrado a las compras de la 6 a la 10 (todas en ruta / pendientes de entrega)
INSERT INTO despacho (fecha_despacho, patente_camion, intento, id_compra, direccion_compra, valor_compra, despachado) VALUES 
('2026-05-17', 'GZ-LK-33', 0, 6, 'Av. Providencia 1420, Depto 402, Providencia', 7500.00, 0),
('2026-05-17', 'JW-SP-88', 1, 7, 'Condominio Los Alerces Casa 12, Peñalolén', 19990.00, 0),
('2026-05-18', 'HG-TL-84', 0, 8, 'Alameda 340, Santiago Centro', 15490.00, 0),
('2026-05-18', 'LB-CR-45', 2, 9, 'Av. Las Condes 11200, Las Condes', 120500.00, 0),
('2026-05-18', 'XD-PT-99', 1, 10, 'Calle Pajaritos 2450, Maipú', 28990.00, 0);