const pool = require('../db/pool');

async function getAll(req, res) {
  const { type } = req.query;
  let query = 'SELECT s.*, COALESCE(AVG(r.score), 0) AS avg_rating, COUNT(r.id) AS total_ratings FROM series s LEFT JOIN ratings r ON s.id = r.series_id';
  const params = [];

  if (type && ['anime', 'manga'].includes(type)) {
    query += ' WHERE s.type = $1';
    params.push(type);
  }

  query += ' GROUP BY s.id ORDER BY s.created_at DESC';

  const result = await pool.query(query, params);
  res.json(result.rows);
}

async function getById(req, res) {
  const { id } = req.params;

  const seriesResult = await pool.query(
    'SELECT s.*, COALESCE(AVG(r.score), 0) AS avg_rating, COUNT(r.id) AS total_ratings FROM series s LEFT JOIN ratings r ON s.id = r.series_id WHERE s.id = $1 GROUP BY s.id',
    [id]
  );

  if (seriesResult.rows.length === 0) {
    return res.status(404).json({ error: 'Serie no encontrada' });
  }

  const chaptersResult = await pool.query(
    'SELECT * FROM chapters WHERE series_id = $1 ORDER BY number ASC',
    [id]
  );

  const commentsResult = await pool.query(
    'SELECT * FROM comments WHERE series_id = $1 ORDER BY created_at DESC',
    [id]
  );

  const series = seriesResult.rows[0];
  series.chapters = chaptersResult.rows;
  series.comments = commentsResult.rows;

  res.json(series);
}

async function create(req, res) {
  const { title, synopsis, type } = req.body;

  if (!title || !type) {
    return res.status(400).json({ error: 'Titulo y tipo son requeridos' });
  }

  if (!['anime', 'manga'].includes(type)) {
    return res.status(400).json({ error: 'Tipo debe ser anime o manga' });
  }

  let imageUrl = null;
  if (req.file) {
    imageUrl = `/uploads/${req.file.filename}`;
  }

  const result = await pool.query(
    'INSERT INTO series (title, synopsis, type, image_url) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, synopsis || null, type, imageUrl]
  );

  res.status(201).json(result.rows[0]);
}

async function update(req, res) {
  const { id } = req.params;
  const { title, synopsis } = req.body;

  let imageUrl = null;
  if (req.file) {
    imageUrl = `/uploads/${req.file.filename}`;
  }

  const fields = [];
  const params = [];
  let idx = 1;

  if (title) {
    fields.push(`title = $${idx++}`);
    params.push(title);
  }
  if (synopsis !== undefined) {
    fields.push(`synopsis = $${idx++}`);
    params.push(synopsis);
  }
  if (imageUrl) {
    fields.push(`image_url = $${idx++}`);
    params.push(imageUrl);
  }

  if (fields.length === 0) {
    return res.status(400).json({ error: 'No hay campos para actualizar' });
  }

  params.push(id);
  const result = await pool.query(
    `UPDATE series SET ${fields.join(', ')} WHERE id = $${idx} RETURNING *`,
    params
  );

  if (result.rows.length === 0) {
    return res.status(404).json({ error: 'Serie no encontrada' });
  }

  res.json(result.rows[0]);
}

async function remove(req, res) {
  const { id } = req.params;
  const result = await pool.query('DELETE FROM series WHERE id = $1 RETURNING *', [id]);

  if (result.rows.length === 0) {
    return res.status(404).json({ error: 'Serie no encontrada' });
  }

  res.json({ message: 'Serie eliminada' });
}

module.exports = { getAll, getById, create, update, remove };
