# 🏢 Sistema de Gestión Transaccional y Logística - Innovatech Chile

Este repositorio implementa una solución modular con frontend React y dos microservicios Java Spring Boot que satisfacen el flujo de ventas y despacho de productos.

## 1. Descripción general del proyecto

El sistema combina:
- Frontend administrativo en **React + Vite** para gestión de usuarios, productos, ventas y despachos.
- Microservicio **Ventas** en **Spring Boot 3.4.4 / Java 17** que expone API REST para `usuarios`, `productos` y `ventas`.
- Microservicio **Despachos** en **Spring Boot 3.4.4 / Java 17** que expone API REST para `despachos`.
- Persistencia en **MySQL 8.0** con volumenes Docker para mantener los datos entre reinicios.
- CI/CD en **GitHub Actions** con despliegue hacia **AWS ECR** y **AWS EC2** mediante **SSM**.

## 2. Arquitectura del sistema

Arquitectura propuesta:

```
[Usuario/Admin] ---> [React Frontend] ---> [API Ventas] ---> [MySQL Ventas]
                                  |--> [API Despachos] ---> [MySQL Despachos]
```

- El frontend consume directamente ambos microservicios.
- No hay gateway unificado ni orquestador de servicios centralizado en el código.
- Cada backend mantiene su propia base de datos.

## 3. Estructura del repositorio

- `frontend/` - Aplicación React + Vite + Tailwind.
- `backend-ventas/` - Microservicio Spring Boot para ventas.
- `backend-despachos/` - Microservicio Spring Boot para despachos.
- `db/` - Dockerfile e `init.sql` para la base de datos MySQL de productos.
- `.github/workflows/` - Pipelines CI/CD para frontend, DB y cada backend.
- `docker-compose.yml` - Orquestación local en Docker.

## 4. Microservicios y responsabilidades

| Servicio | Carpeta | Puerto interno | Responsabilidad |
|---|---|---|---|
| Ventas | `backend-ventas/` | `8080` | Gestiona usuarios, productos y ventas. Exposición de endpoints REST. |
| Despachos | `backend-despachos/` | `8081` | Gestiona despachos logísticos y estado de entrega. |
| Frontend | `frontend/` | `80` | Interfaz de administración para consultar ventas, generar despachos y cerrar entregas. |
| DB custom | `db/` | `3306` | Imagen MySQL con script de semilla para `productos`. |

## 5. Tecnologías utilizadas y versiones reales detectadas

| Categoría | Tecnología | Versión detectada |
|---|---|---|
| Backend | Spring Boot | 3.4.4 |
| Backend | Java | 17 |
| Backend | Maven | 3.8.5 |
| Backend | Spring Data JPA | 3.4.3 |
| Backend | SpringDoc OpenAPI | 2.7.0 |
| Base de datos | MySQL | 8.0 |
| Frontend | React | 18.2.0 |
| Frontend | Vite | 5.2.0 |
| Frontend | Axios | 1.6.8 |
| Frontend | Tailwind CSS | 3.4.3 |
| Frontend | React Router DOM | 6.24.1 |
| Runtime Docker | Amazon Corretto | 17-alpine |
| CI/CD | GitHub Actions | - |
| AWS | ECR / SSM / EC2 | - |

## 6. Seguridad implementada

Lo que hay implementado:
- Dockerfiles de backend usan **usuario no root** (`spring`) en runtime.
- Arquitectura de capas separa controladores, servicios y repositorios.
- CORS habilitado en ambos backends para permitir consumo desde la UI.

Limitaciones encontradas:
- No existe implementación real de **JWT** ni autenticación basada en tokens.
- No se detecta `spring-boot-starter-security` ni clases de seguridad personalizada.
- Las APIs están expuestas con `@CrossOrigin(origins = "*")`, lo cual abre el backend a cualquier origen.
- Las credenciales de BD en el repositorio usan `root_password` como valor por defecto.

## 7. Patrones de diseño y justificación técnica

Patrones observados:
- **Layered Architecture**: Controllers → Services → Repositories → Entities.
- **Repository Pattern**: Uso de `JpaRepository` para persistencia.
- **Service Layer**: Lógica de negocio centralizada en `*Service` y `*ServiceImpl`.

Justificación:
- Permite separar la lógica de caso de uso del acceso a datos.
- Facilita pruebas unitarias, mantenimiento y extensión de la API.
- El uso de Spring Data JPA reduce la complejidad de las consultas CRUD.

## 8. Flujo general de una petición

1. El usuario ingresa a la UI React.
2. React realiza una petición `GET` o `PUT` a `VITE_API_URL_VENTAS` o `VITE_API_URL_DESPACHOS`.
3. El backend recibe la solicitud en un `@RestController`.
4. El controlador delega a la capa `Service`.
5. La capa `Service` usa un repositorio `JpaRepository` para guardar/recuperar datos.
6. MySQL persiste la información en el volumen Docker.
7. El backend responde con JSON al frontend.

## 9. Docker y contenedorización

Cada backend usa un **Dockerfile multi-stage**:
- Etapa 1: `maven:3.8.5-openjdk-17` para compilar y empaquetar.
- Etapa 2: `amazoncorretto:17-alpine` para runtime ligero.

El frontend también es contenerizado:
- Etapa 1: `node:18-alpine` para `npm install` y `npm run build`.
- Etapa 2: `nginx:alpine` para servir estáticos.

## 10. docker-compose y comunicación entre servicios

`docker-compose.yml` define:
- `tienda-db-cdci` → MySQL ventas.
- `tienda-db-despachos` → MySQL despachos.
- `back-ventas` → microservicio de ventas.
- `back-despachos` → microservicio de despachos.
- `front-despacho` → frontend React.

Todos los servicios confluyen en la red `innovatech-net`.

## 11. Persistencia con volúmenes Docker

Las bases de datos usan volúmenes nombrados:
- `db_ventas_persistente`
- `db_despachos_persistente`

Esto asegura que los datos no se pierdan al detener contenedores MySQL.

## 12. Pipeline CI/CD

Se detectaron 4 workflows principales:
- `cicd-tienda-frontend.yml`
- `cicd-tienda-db.yml`
- `backend-ventas.yml`
- `backend-despachos.yml`

Funciones principales:
- Build de imágenes Docker.
- Push a AWS ECR.
- Despliegue remoto en EC2 mediante `aws ssm send-command`.

## 13. GitHub Actions y rama deploy

- El disparador principal es `push` en la rama `deploy`.
- Todos los workflows también admiten `workflow_dispatch` para ejecuciones manuales.
- Las credenciales se guardan en `GitHub Secrets`.

## 14. Variables de entorno utilizadas

### Backends
- `DB_ENDPOINT`
- `DB_PORT`
- `DB_NAME`
- `DB_USERNAME`
- `DB_PASSWORD`
- `SPRING_DATASOURCE_URL` (en `docker-compose.yml`)
- `SPRING_DATASOURCE_USERNAME`
- `SPRING_DATASOURCE_PASSWORD`

### Frontend
- `VITE_API_URL_VENTAS`
- `VITE_API_URL_DESPACHOS`

### Valores detectados en `frontend/.env`
- `VITE_API_URL_VENTAS=http://54.175.136.248:8080/api/v1/ventas`
- `VITE_API_URL_DESPACHOS=http://98.94.89.196:8082/api/v1/despachos`

## 15. Integración Frontend ↔ Backend

La UI utiliza `axios` para consumir las APIs:
- `TableCompras` consulta ventas pendientes: `GET ${VITE_API_URL_VENTAS}`.
- `FormDespacho` actualiza la venta con `PUT ${VITE_API_URL_VENTAS}/{id}` y crea un despacho con `POST ${VITE_API_URL_DESPACHOS}`.
- `TableDespachos` consulta despachos con `GET ${VITE_API_URL_DESPACHOS}`.
- `TableUsuarios` y `TableProductos` llaman a rutas construidas desde `VITE_API_URL_VENTAS`.

## 16. Configuración AWS EC2 si existe

Se detecta deploy a AWS mediante GitHub Actions:
- Uso de `aws-actions/configure-aws-credentials`.
- Login a ECR con `aws-actions/amazon-ecr-login`.
- Despliegue remoto usando `aws ssm send-command`.

No se encontró infraestructura declarativa en el repositorio (Terraform, CloudFormation o CDK).

## 17. Cómo ejecutar el proyecto localmente

### Backend Ventas
```bash
cd backend-ventas/Springboot-API-REST
./mvnw spring-boot:run
```

### Backend Despachos
```bash
cd backend-despachos/Springboot-API-REST-DESPACHO
./mvnw spring-boot:run
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Base de datos local
```bash
cd db
docker build -t tienda-db-cdci .
```

## 18. Cómo ejecutar el proyecto con Docker

### Build manual de imágenes
```bash
cd backend-ventas
docker build -t tienda-ventas .

cd ../backend-despachos
docker build -t tienda-despachos .

cd ../frontend
docker build -t tienda-frontend .
```

### Orquestación con docker-compose
```bash
docker-compose up --build
```

> Nota: El `docker-compose.yml` usa ahora rutas de build coherentes con las carpetas reales del repositorio (`backend-ventas`, `backend-despachos`, `frontend`).

## 19. Swagger/OpenAPI si existe

Ambos backends integran **SpringDoc OpenAPI** y están configurados para exponer UI de Swagger en:
- `http://<host>:8080/swagger-ui.html` para Ventas
- `http://<host>:8081/swagger-ui.html` para Despachos

## 20. Conclusión técnica

El proyecto implementa una arquitectura de microservicios con frontend React, servicios Java Spring Boot y persistencia MySQL. La orquestación Docker y los workflows de GitHub Actions muestran una intención clara de CI/CD y despliegue en AWS.

### Fortalezas
- Separación de responsabilidades entre Ventas y Despachos.
- Dockerfiles multi-stage y usuario no root para backend.
- CI/CD con AWS ECR y despliegue remoto por SSM.
- Documentación de API con SpringDoc/OpenAPI.



