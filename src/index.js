const express = require('express');
const cors = require('cors');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
require('dotenv').config();

const seriesRoutes = require('./routes/series');
const chaptersRoutes = require('./routes/chapters');
const commentsRoutes = require('./routes/comments');
const ratingsRoutes = require('./routes/ratings');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use('/api/series', seriesRoutes);
app.use('/api/chapters', chaptersRoutes);
app.use('/api/comments', commentsRoutes);
app.use('/api/ratings', ratingsRoutes);

// Configuración de Swagger
const swaggerDocument = YAML.load(path.join(__dirname, '../docs/swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
  console.log(`Documentación API disponible en http://localhost:${PORT}/api-docs`);
});
