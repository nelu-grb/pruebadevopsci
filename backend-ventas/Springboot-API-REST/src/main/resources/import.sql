-- Forzar a la base de datos a resetear el contador auto-incremental a 1 siempre
ALTER TABLE venta AUTO_INCREMENT = 1;

-- Las primeras 5 listas para generar despacho (despacho_generado = false)
INSERT INTO venta (id_venta, direccion_compra, fecha_compra, valor_compra, despacho_generado) VALUES (1, 'Av. Vicuña Mackenna 4860, San Joaquín', '2026-05-16', 25990, false);
INSERT INTO venta (id_venta, direccion_compra, fecha_compra, valor_compra, despacho_generado) VALUES (2, 'Pasaje El Romeral 124, La Florida', '2026-05-16', 12450, false);
INSERT INTO venta (id_venta, direccion_compra, fecha_compra, valor_compra, despacho_generado) VALUES (3, 'Calle Las Brisas 890, Puente Alto', '2026-05-16', 45800, false);
INSERT INTO venta (id_venta, direccion_compra, fecha_compra, valor_compra, despacho_generado) VALUES (4, 'Av. Américo Vespucio 1501, Cerrillos', '2026-05-17', 89990, false);
INSERT INTO venta (id_venta, direccion_compra, fecha_compra, valor_compra, despacho_generado) VALUES (5, 'Gran Avenida 6540, La Cisterna', '2026-05-16', 35400, false);

-- De la 6 a la 10 ya procesadas (despacho_generado = true)
INSERT INTO venta (id_venta, direccion_compra, fecha_compra, valor_compra, despacho_generado) VALUES (6, 'Av. Providencia 1420, Providencia', '2026-05-17', 7500, true);
INSERT INTO venta (id_venta, direccion_compra, fecha_compra, valor_compra, despacho_generado) VALUES (7, 'Condominio Los Alerces Casa 12, Peñalolén', '2026-05-17', 19990, true);
INSERT INTO venta (id_venta, direccion_compra, fecha_compra, valor_compra, despacho_generado) VALUES (8, 'Alameda 340, Santiago Centro', '2026-05-18', 15490, true);
INSERT INTO venta (id_venta, direccion_compra, fecha_compra, valor_compra, despacho_generado) VALUES (9, 'Av. Las Condes 11200, Las Condes', '2026-05-18', 120500, true);
INSERT INTO venta (id_venta, direccion_compra, fecha_compra, valor_compra, despacho_generado) VALUES (10, 'Calle Pajaritos 2450, Maipú', '2026-05-18', 28990, true);