# ETAPA 1: Construcción (Build)
FROM node:18-alpine AS build
WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el código y generar la carpeta 'dist'
COPY . .
RUN npm run build

# ETAPA 2: Servidor Web ligero (Nginx)
FROM nginx:alpine

# REQUERIMIENTO IE1: Copiar archivos estáticos a la ruta de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer puerto 80 para el tráfico web
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]