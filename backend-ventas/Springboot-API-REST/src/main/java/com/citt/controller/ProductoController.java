package com.citt.controller;

import com.citt.model.Producto;
import com.citt.persistence.services.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/productos")
@CrossOrigin(origins = "*") // Permite que React consuma esta API desde cualquier IP de AWS
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    // GET http://IP-DE-VENTAS:8080/api/v1/productos
    @GetMapping
    public ResponseEntity<List<Producto>> obtenerTodosLosProductos() {
        List<Producto> productos = productoService.listarTodos();
        
        if (productos.isEmpty()) {
            return ResponseEntity.noContent().build(); // Retorna 204 si la tabla está vacía
        }
        
        return ResponseEntity.ok(productos); // Retorna 200 OK junto con el JSON de productos
    }

    // POST http://IP-DE-VENTAS:8080/api/v1/productos (Por si necesitas meter uno desde Swagger)
    @PostMapping
    public ResponseEntity<Producto> crearProducto(@RequestBody Producto producto) {
        Producto nuevoProducto = productoService.guardar(producto);
        return ResponseEntity.ok(nuevoProducto);
    }
}