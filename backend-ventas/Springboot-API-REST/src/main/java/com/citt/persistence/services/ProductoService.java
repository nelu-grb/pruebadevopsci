package com.citt.persistence.services; // Ajusta el package a tu proyecto

import com.citt.model.Producto;
import com.citt.persistence.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    // Método que llamará el botón "Consultar" desde React para traer la lista
    public List<Producto> listarTodos() {
        return productoRepository.findAll();
    }

    // Método opcional por si el frontend necesita guardar o actualizar un producto
    public Producto guardar(Producto producto) {
        return productoRepository.save(producto);
    }
}