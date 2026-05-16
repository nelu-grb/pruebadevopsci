# 🏢 Sistema de Gestión Transaccional y Logística

Solución con frontend React y dos microservicios Java que cubre ventas y despachos.

## 1. Descripción general del proyecto

Este proyecto tiene:
- Frontend React + Vite para ver usuarios, productos, ventas y despachos.
- Backend de Ventas en Spring Boot que gestiona usuarios, productos y ventas.
- Backend de Despachos en Spring Boot que gestiona órdenes de despacho.
- Bases de datos MySQL con volúmenes Docker para mantener la información.
- CI/CD con GitHub Actions y despliegue a AWS mediante ECR y SSM.

## 2. Arquitectura del sistema

```
[Usuario] -> [React Frontend]
             /           \
     [API Ventas]    [API Despachos]
         |                 |
    [MySQL Ventas]   [MySQL Despachos]
```

## 3. Estructura del repositorio

- `frontend/` - UI React.
- `backend-ventas/` - microservicio de ventas.
- `backend-despachos/` - microservicio de despachos.
- `db/` - Dockerfile e `init.sql` para MySQL.
- `.github/workflows/` - pipelines para frontend, DB y backends.
- `docker-compose.yml` - orquestación local.

## 4. Microservicios y responsabilidades

- **Ventas** (`backend-ventas/`, puerto `8080`): administra usuarios, productos y ventas.
- **Despachos** (`backend-despachos/`, puerto `8081`): maneja las órdenes y el estado de entrega.
- **Frontend** (`frontend/`, puerto `80`): panel para operar y revisar datos.
- **DB** (`db/`, puerto `3306`): base de datos de productos y datos iniciales.

## 5. Tecnologías principales

- Java 17, Spring Boot 3.4.4, Maven
- Spring Data JPA, SpringDoc OpenAPI
- MySQL 8.0
- React 18, Vite 5, Axios, Tailwind
- Docker, GitHub Actions, AWS ECR, AWS SSM

## 6. Seguridad y limitaciones

Lo que está presente:
- Dockerfiles backend usan usuario no root.
- Separación clara entre controladores, servicios y repositorios.

Lo que falta o es débil:
- No hay JWT ni Spring Security.
- CORS está abierto (`*`).
- Credenciales de BD por defecto en el proyecto.

## 7. Patrones de diseño

Se usa una estructura simple de capas:
- Controllers
- Services
- Repositories
- Entities

Esto facilita entender y mantener el código.

## 8. Flujo de la aplicación

1. El usuario abre la UI React.
2. La UI hace llamadas `axios` a las APIs.
3. El backend recibe la petición y pasa la lógica al servicio.
4. El servicio usa JPA para leer/escribir en MySQL.
5. La respuesta vuelve al frontend en JSON.

## 9. Docker y contenedorización

- Backend: build con Maven, runtime en `amazoncorretto:17-alpine`.
- Frontend: build con Node y sirve estáticos con `nginx:alpine`.

## 10. docker-compose y comunicación

`docker-compose.yml` levanta:
- MySQL ventas
- MySQL despachos
- API ventas
- API despachos
- Frontend React

Todos usan la red `innovatech-net`.

## 11. Persistencia con volúmenes

MySQL usa volúmenes para mantener datos entre reinicios:
- `db_ventas_persistente`
- `db_despachos_persistente`

## 12. CI/CD y GitHub Actions

Workflows:
- `cicd-tienda-frontend.yml`
- `cicd-tienda-db.yml`
- `backend-ventas.yml`
- `backend-despachos.yml`

Cada pipeline construye imágenes Docker, las sube a ECR y ejecuta despliegue remoto con SSM.

## 13. Variables de entorno

Backends:
- `DB_ENDPOINT`, `DB_PORT`, `DB_NAME`, `DB_USERNAME`, `DB_PASSWORD`
- `SPRING_DATASOURCE_URL`, `SPRING_DATASOURCE_USERNAME`, `SPRING_DATASOURCE_PASSWORD`

Frontend:
- `VITE_API_URL_VENTAS`
- `VITE_API_URL_DESPACHOS`

## 14. Integración Frontend ↔ Backend

- Ventas obtiene datos desde `VITE_API_URL_VENTAS`.
- Despachos usa `VITE_API_URL_DESPACHOS`.
- El frontend crea y actualiza ventas y genera despachos.

## 15. AWS EC2 detectado

Sí: GitHub Actions usa AWS ECR y AWS SSM para desplegar en instancias EC2.
No hay infraestructura declarativa como Terraform o CloudFormation en el repositorio.

## 16. Cómo ejecutar localmente

Backend Ventas:
```bash
cd backend-ventas/Springboot-API-REST
./mvnw spring-boot:run
```

Backend Despachos:
```bash
cd backend-despachos/Springboot-API-REST-DESPACHO
./mvnw spring-boot:run
```

Frontend:
```bash
cd frontend
npm install
npm run dev
```

DB local:
```bash
cd db
docker build -t tienda-db-cdci .
```

## 17. Cómo ejecutar con Docker

```bash
docker-compose up --build
```

## 18. Swagger/OpenAPI

Cada backend incluye SpringDoc.
Accede a:
- `http://<host>:8080/swagger-ui.html`
- `http://<host>:8081/swagger-ui.html`

## 19. Conclusión

El proyecto funciona como un sistema de ventas y despacho con frontend React, APIs Spring Boot y bases MySQL. La configuración Docker y los workflows apuntan a una solución lista para CI/CD, aunque faltan controles de seguridad más avanzados.


