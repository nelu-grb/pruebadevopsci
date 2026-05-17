-- Forzar a la base de datos a resetear el contador auto-incremental a 1 siempre
ALTER TABLE despacho AUTO_INCREMENT = 1;

-- Mapeo exacto con las primeras ventas correspondientes (repartidas en entregadas y pendientes)
INSERT INTO despacho (fecha_despacho, patente_camion, intento, id_compra, direccion_compra, valor_compra, despachado) VALUES 
('2026-05-16', 'HG-TL-84', 1, 1, 'Av. Vicuña Mackenna 4860, San Joaquín', 25990.00, 0),
('2026-05-16', 'FT-XW-12', 2, 2, 'Pasaje El Romeral 124, La Florida', 12450.00, 0),
('2026-05-16', 'XD-PT-99', 0, 3, 'Calle Las Brisas 890, Puente Alto', 45800.00, 0),
('2026-05-17', 'FT-XW-12', 1, 4, 'Av. Américo Vespucio 1501, Cerrillos', 89990.00, 0),
('2026-05-16', 'LB-CR-45', 1, 5, 'Gran Avenida 6540, La Cisterna', 35400.00, 1),
('2026-05-15', 'GZ-LK-33', 2, 6, 'Av. Providencia 1420, Depto 402, Providencia', 7500.00, 1);