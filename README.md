# AniManga Backend

Backend de la aplicacion AniManga construido con Express y PostgreSQL. Expone una API REST para series, capitulos, comentarios, ratings, exportacion manual a CSV, subida de portadas y documentacion OpenAPI con Swagger UI.

## 1. Enlaces Importantes

- Link al otro repositorio: https://github.com/24750Montenegro/proy1-animanga-frontend
- Link a este repositorio: https://github.com/24750Montenegro/proy1-animanga-backend

## 2. Instrucciones de Ejecucion Local

### Opcion A: levantarlo manualmente

1. Clona el repositorio y entra a la carpeta del backend.
2. Instala las dependencias:

```bash
npm install
```

3. Crea tu archivo `.env` a partir del ejemplo:

Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Linux:

```bash
cp .env.example .env
```

4. Configura las variables de entorno de base de datos en `.env`:

```env
DB_HOST=localhost
DB_PORT=5437
DB_USER=animanga
DB_PASSWORD=animanga123
DB_NAME=animanga_db
PORT=3000
```

Si usas PostgreSQL instalado localmente, puedes cambiar `DB_PORT` a `5432` o al puerto que tengas configurado. Si usas el Docker Compose de ejemplo, deja `DB_PORT=5437`.

5. Asegurate de tener PostgreSQL corriendo y crea la base de datos con esas credenciales, o usa Docker Compose con la opcion B.
6. Ejecuta la migracion:

```bash
npm run migrate
```

7. Inicia el servidor:

```bash
npm start
```

8. La API quedara disponible en `http://localhost:3000/api` y Swagger UI en `http://localhost:3000/api-docs`.

### Opcion B: levantarlo con Docker Compose

El repositorio deja solo el archivo de ejemplo, pero funciona directamente al renombrarlo quitandole `.example`.

Windows PowerShell:

```powershell
Copy-Item docker-compose.yml.example docker-compose.yml
Copy-Item .env.example .env
docker compose up --build
```

Linux:

```bash
cp docker-compose.yml.example docker-compose.yml
cp .env.example .env
docker compose up --build
```

Con esa configuracion se levantan PostgreSQL y el backend listos para trabajar en local.

## 3. Screenshot de la Aplicacion

## 4. Configuracion de CORS

CORS es un middleware que agrega encabezado a las peticiones restringiendo los origenes, es decir quienes pueden realizarlas y quienes no.

En este backend se habilito CORS usando el middleware `cors()` de Express para permitir el consumo de la API REST desde el cliente frontend.

## 5. Lista de Challenges Implementados

- Spec OpenAPI/Swagger y Swagger UI sirviendose.
- Retorno de codigos HTTP correctos.
- Validacion de errores Server-Side con JSON.
- Exportar los datos a CSV a mano.
- Sistema integral de Ratings (Puntuacion).
- Funcionalidad para adjuntar y subir archivos de imagen (Portada).

## 6. Reflexion de la Tecnologia

Usar HTML, CSS y JavaScript vanilla en el frontend me parecio bien para entender mejor como funciona todo sin librerias, pero tambien se siente un poco cansado tener que hacer los `fetch()` manualmente y renderizar la informacion recorriendo arreglos con `forEach`, `innerHTML` y `appendChild`. Creo que lo mas interesante de esta parte fue el manejo y la subida local de imagenes, porque anteriormente solo habia trabajado con servicios de storage como Cloudinary o guardando imagenes en base64. En cuanto al backend, mi stack fue principalmente Node.js con Express y CORS, y me parece un muy buen stack que ya habia utilizado antes y que seguramente seguire usando bastante, porque considero que segmenta muy bien las responsabilidades entre controladores, rutas y middlewares. Otra cosa que me gusto bastante fue usar Swagger UI para documentar los endpoints, porque hace mucho mas facil visualizar, probar y entender la API. Si volviera a hacer un proyecto nuevo, si reutilizaria el stack del backend, pero para el frontend preferiria usar librerias como React y Axios para facilitar todo el tema del mapeo de informacion y la normalizacion de solicitudes. Los challenges tambien sirvieron para reforzar temas como validaciones, codigos HTTP, exportacion a CSV y documentacion de la API.
