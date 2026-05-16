# Dockerfile para la aplicación Spring Boot - Backend de Ventas
# (Build)
FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app

# Copiar apuntando a la subcarpeta del proyecto
COPY Springboot-API-REST/pom.xml .
COPY Springboot-API-REST/src ./src

# Compilar y empaquetar el proyecto saltando los tests para velocidad
RUN mvn clean package -DskipTests -Dmaven.test.skip=true

# Ejecución (Runtime) - Imagen ligera
FROM amazoncorretto:17-alpine
WORKDIR /app

# REQUERIMIENTO IE1: Usuario no root por seguridad
RUN addgroup --system spring && adduser --system spring --ingroup spring
USER spring:spring

# Copiar el archivo .jar asignando la propiedad al usuario no root de inmediato
COPY --from=build --chown=spring:spring /app/target/*.jar app.jar

# Exponer el puerto por defecto de Spring Boot
EXPOSE 8080

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]