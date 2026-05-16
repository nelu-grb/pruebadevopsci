package com.citt.exceptions.dto;

import org.springframework.http.HttpStatus;

public class ErrorMessage {
    private HttpStatus status;
    private String message;

    // Constructor vacío manual
    public ErrorMessage() {}

    // Constructor con argumentos manual (El que Maven exige)
    public ErrorMessage(HttpStatus status, String message) {
        this.status = status;
        this.message = message;
    }

    // Getters y Setters manuales
    public HttpStatus getStatus() { return status; }
    public void setStatus(HttpStatus status) { this.status = status; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
}