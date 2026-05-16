package com.citt.persistence.services; // Ajusta el package a tu estructura

import com.citt.model.Usuario;
import com.citt.persistence.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    // Trae la lista completa de usuarios para el panel lateral
    public List<Usuario> listarTodos() {
        return usuarioRepository.findAll();
    }

    // Guarda un nuevo usuario (útil para el registro de clientes)
    public Usuario guardar(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }
}