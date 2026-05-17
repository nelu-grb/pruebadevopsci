# ETAPA 1: Construcción (Build)
FROM node:18-alpine AS build
WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el código fuente
COPY . .

# 🚨 EL AJUSTE CLAVE: Eliminar el .env físico (si existe) para obligar a usar las variables de GitHub
RUN rm -f .env .env.local .env.production || true

# 🚨 EL AJUSTE CLAVE: Recibir e inyectar las variables justo ANTES del build de Vite
ARG VITE_API_URL_VENTAS
ARG VITE_API_URL_DESPACHOS

ENV VITE_API_URL_VENTAS=$VITE_API_URL_VENTAS
ENV VITE_API_URL_DESPACHOS=$VITE_API_URL_DESPACHOS

# Generar la carpeta 'dist' con las IPs dinámicas incrustadas en el JavaScript
RUN npm run build

# ETAPA 2: Servidor Web ligero (Nginx)
FROM nginx:alpine

# REQUERIMIENTO IE1: Copiar archivos estáticos a la ruta de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer puerto 80 para el tráfico web
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]