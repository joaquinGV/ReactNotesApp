# Comando para instalar las dependencias del frontend
cd frontend && npm install && cd ..

# Comando para instalar las dependencias del backend
cd backend && npm install && cd ..

# Comando para iniciar el frontend
echo "Iniciando el frontend..."
gnome-terminal --tab -- npm run dev --prefix frontend &

# Comando para iniciar el backend
echo "Iniciando el backend..."
gnome-terminal --tab -- node src/app.js --prefix backend &