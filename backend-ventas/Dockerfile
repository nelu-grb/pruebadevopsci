# ETAPA 1: Construcción (Build)
FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app

# Copiar archivos de configuración y código fuente
COPY pom.xml .
COPY src ./src

# Compilar y empaquetar el proyecto saltando los tests para velocidad
RUN mvn clean package -DskipTests

# ETAPA 2: Ejecución (Runtime) - Imagen ligera
FROM openjdk:17-jdk-slim
WORKDIR /app

# REQUERIMIENTO IE1: Usuario no root por seguridad
RUN addgroup --system spring && adduser --system spring --ingroup spring
USER spring:spring

# Copiar solo el archivo .jar generado en la etapa anterior
COPY --from=build /app/target/*.jar app.jar

# Exponer el puerto por defecto de Spring Boot
EXPOSE 8080

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]