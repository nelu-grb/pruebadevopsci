# 🏢 Sistema de Gestión Transaccional y Logística - Innovatech Chile

Este repositorio unificado contiene la solución completa, contenerizada y automatizada para el ecosistema de Innovatech Chile, estructurado bajo una arquitectura de microservicios desacoplados y un frontend administrativo reactivo.

## 🏛️ Estructura del Repositorio
El proyecto está organizado de forma modular en las siguientes carpetas:
* **`frontend/`**: Interfaz de usuario administrativa desarrollada en React + Vite.
* **`backend-ventas/`**: Microservicio en Java Spring Boot que gestiona las órdenes de compra transaccionales (Puerto 8080).
* **`backend-despachos/`**: Microservicio en Java Spring Boot que procesa la asignación logística, transportistas y patentes (Puerto 8082).
* **`db/`**: Scripts de inicialización o configuración local para los motores de bases de datos relacionales MySQL 8.0.

---

## 🐋 Contenerización Avanzada de Servicios (IE1)
Los componentes de backend cuentan con archivos `Dockerfile` optimizados bajo estándares estricto de DevOps:
* **Multi-stage Build:** Se utiliza una etapa inicial pesada con Maven para compilar el código fuente (`AS build`) y una etapa de runtime ultra ligera basada en `amazoncorretto:17-alpine`, reduciendo el tamaño final de la imagen y la superficie de ataque en AWS.
* **Usuario No Root:** Siguiendo el principio de mínimo privilegio por seguridad, la ejecución del proceso Java está restringida al usuario de sistema `spring`, evitando privilegios de administración.
* **Gestión de Permisos:** Se implementa la bandera `--chown=spring:spring` en la capa de copia del `.jar` para asegurar la correcta lectura y ejecución del artefacto sin requerir elevación de permisos del sistema.

---

## 💾 Persistencia de Datos y Continuidad Operativa (IE3)
El archivo general `docker-compose.yml` orquesta el stack completo y asegura el patrón de diseño de **Base de Datos por Servicio** para garantizar el desacoplamiento total:
* `db_ventas_persistente`: Named volume mapeado a la ruta interna `/var/lib/mysql` de la base de datos de ventas (`tienda_ventas_db`).
* `db_despachos_persistente`: Named volume mapeado a la ruta interna `/var/lib/mysql` de la base de datos de despachos (`tienda_despachos_db`).

El uso de **Named Volumes** gestionados nativamente por el demonio de Docker garantiza la persistencia crítica e integridad de los datos logísticos de la empresa ante reinicios programados, fallos de infraestructura o mantenimiento de las instancias AWS EC2.

---

## 🚀 Pipeline de Integración y Despliegue Continuo (IE4)
Ubicado en la carpeta `.github/workflows/`, el pipeline de GitHub Actions automatiza el ciclo de vida del software activándose **únicamente ante un push sobre la rama deploy**:
1. **Build & Push:** Compila el frontend estático y empaqueta los servicios Spring Boot de forma aislada, construyendo las imágenes Docker.
2. **Registry:** Publica las imágenes de forma segura en el registro privado de contenedores **AWS ECR** utilizando credenciales resguardadas mediante **GitHub Secrets**.
3. **Automated Deploy:** Establece una conexión segura vía SSH a las instancias correspondientes en **AWS EC2** para descargar las versiones actualizadas y reiniciar los contenedores mediante Docker Compose sin interrumpir la disponibilidad del sistema.