const pool = require('../db/pool');

async function getBySeries(req, res) {
  const { seriesId } = req.params;

  const result = await pool.query(
    'SELECT COALESCE(AVG(score), 0) AS avg_rating, COUNT(id) AS total_ratings FROM ratings WHERE series_id = $1',
    [seriesId]
  );

  res.json(result.rows[0]);
}

async function create(req, res) {
  const { seriesId } = req.params;
  const { score } = req.body;

  if (!score || score < 1 || score > 10) {
    return res.status(400).json({ error: 'Puntuacion debe ser entre 1 y 10' });
  }

  const result = await pool.query(
    'INSERT INTO ratings (series_id, score) VALUES ($1, $2) RETURNING *',
    [seriesId, score]
  );

  res.status(201).json(result.rows[0]);
}

module.exports = { getBySeries, create };
