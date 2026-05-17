package com.citt.persistence.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;

import org.springframework.format.annotation.DateTimeFormat;
import java.time.LocalDate;

@Builder
@Entity
public class Venta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idVenta;
    
    @NotBlank(message = "La dirección es obligatoria")
    private String direccionCompra;
    
    private int valorCompra;
    
    @NotNull(message = "Fecha de compra es obligatoria")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate fechaCompra;
    
    @NotNull(message = "El campo de despacho debe ser proporcionado")
    private Boolean despachoGenerado = false;

    // CONSTRUCTORES MANUALES (Para suplir NoArgsConstructor y AllArgsConstructor)
    public Venta() {}

    public Venta(Long idVenta, String direccionCompra, int valorCompra, LocalDate fechaCompra, Boolean despachoGenerado) {
        this.idVenta = idVenta;
        this.direccionCompra = direccionCompra;
        this.valorCompra = valorCompra;
        this.fechaCompra = fechaCompra;
        this.despachoGenerado = despachoGenerado;
    }

    // GETTERS Y SETTERS EXPLÍCITOS (La solución definitiva para Maven)
    public Long getIdVenta() { return idVenta; }
    public void setIdVenta(Long idVenta) { this.idVenta = idVenta; }

    public String getDireccionCompra() { return direccionCompra; }
    public void setDireccionCompra(String direccionCompra) { this.direccionCompra = direccionCompra; }

    public int getValorCompra() { return valorCompra; }
    public void setValorCompra(int valorCompra) { this.valorCompra = valorCompra; }

    public LocalDate getFechaCompra() { return fechaCompra; }
    public void setFechaCompra(LocalDate fechaCompra) { this.fechaCompra = fechaCompra; }

    public Boolean getDespachoGenerado() { return despachoGenerado; }
    public void setDespachoGenerado(Boolean despachoGenerado) { this.despachoGenerado = despachoGenerado; }
}