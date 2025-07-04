# ERC Node App

Aplicación mínima de Node.js.

## Instrucciones para ejecutar

### Localmente

```bash
npm install
npm start
```

La aplicación estará disponible en http://localhost:3000

### Con Docker

```bash
# Construir la imagen
docker build -t erc-node-app .

# Ejecutar el contenedor
docker run -p 3000:3000 erc-node-app
```

La aplicación estará disponible en http://localhost:3000
