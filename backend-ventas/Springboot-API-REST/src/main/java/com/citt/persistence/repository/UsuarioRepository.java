package main.java.com.citt.persistence.repository; // Asegúrate de que el package coincida con tu carpeta

import com.citt.model.Usuario; // Importas tu modelo
import org.springframework.data.jpa.repository.JpaRepository; // Importas la herramienta
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

}