# ETAPA 1: Construcción (Build)
FROM node:18-alpine AS build
WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar todo el código fuente (Incluyendo el archivo .env que enviaremos por Git)
COPY . .

# Generar la carpeta 'dist' (Vite leerá automáticamente el archivo .env copiado aquí)
RUN npm run build

# ETAPA 2: Servidor Web ligero (Nginx)
FROM nginx:alpine

# Copiar archivos estáticos compilados a la ruta de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer puerto 80 para el tráfico web
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]