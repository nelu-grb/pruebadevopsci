package com.citt.controller;

import com.citt.model.Usuario;
import com.citt.persistence.services.UsuarioService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/usuarios")
@CrossOrigin(origins = "*") // Clave para la comunicación con tu React en AWS
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    // GET http://IP-DE-VENTAS:8080/api/v1/usuarios
    @GetMapping
    public ResponseEntity<List<Usuario>> obtenerTodosLosUsuarios() {
        List<Usuario> usuarios = usuarioService.listarTodos();
        
        if (usuarios.isEmpty()) {
            return ResponseEntity.noContent().build(); // Retorna 204 si no hay nadie registrado
        }
        
        return ResponseEntity.ok(usuarios); // Retorna 200 OK con la lista JSON
    }

    // POST http://IP-DE-VENTAS:8080/api/v1/usuarios
    @PostMapping
    public ResponseEntity<Usuario> registrarUsuario(@RequestBody Usuario usuario) {
        Usuario nuevoUsuario = usuarioService.guardar(usuario);
        return ResponseEntity.ok(nuevoUsuario);
    }
}