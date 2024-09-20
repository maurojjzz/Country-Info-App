#!/bin/bash

# Cambiar a la carpeta del frontend e instalar dependencias
cd frontend || exit
npm install

# Crear el archivo .env en el frontend
echo "VITE_API_URL=http://localhost:3001/api" > .env

# Cambiar a la carpeta del backend e instalar dependencias
cd ../backend || exit
npm install

# Crear el archivo .env en el backend
cat <<EOL > .env
PORT=3001
COUNTRIES_API=https://date.nager.at/api/v3/AvailableCountries
COUNTRY_INFO=https://date.nager.at/api/v3/CountryInfo
COUNTRY_POPULATION=https://countriesnow.space/api/v0.1/countries/population
COUNTRY_FLAG=https://countriesnow.space/api/v0.1/countries/flag/images
EOL

# Regresar a la raíz del proyecto
cd ..

# Ejecutar el backend y el frontend en segundo plano
(cd backend && npm run start:dev) & 
(cd frontend && npm run dev) &

# Esperar a que ambos procesos finalicen

wait