const express = require('express');
const cors = require('cors');
const path = require('path');
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

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
