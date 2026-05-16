package com.citt.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.citt.model.Producto;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
}