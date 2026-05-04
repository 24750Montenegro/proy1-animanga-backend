const pool = require('../db/pool');

async function getBySeriesId(req, res) {
  const { seriesId } = req.params;
  const result = await pool.query(
    'SELECT * FROM comments WHERE series_id = $1 ORDER BY created_at DESC',
    [seriesId]
  );
  res.json(result.rows);
}

async function getByChapterId(req, res) {
  const { chapterId } = req.params;
  const result = await pool.query(
    'SELECT * FROM comments WHERE chapter_id = $1 ORDER BY created_at DESC',
    [chapterId]
  );
  res.json(result.rows);
}

async function createForSeries(req, res) {
  const { seriesId } = req.params;
  const { author, content } = req.body;

  if (!author || !content) {
    return res.status(400).json({ error: 'Autor y contenido son requeridos' });
  }

  const result = await pool.query(
    'INSERT INTO comments (series_id, author, content) VALUES ($1, $2, $3) RETURNING *',
    [seriesId, author, content]
  );

  res.status(201).json(result.rows[0]);
}

async function createForChapter(req, res) {
  const { chapterId } = req.params;
  const { author, content } = req.body;

  if (!author || !content) {
    return res.status(400).json({ error: 'Autor y contenido son requeridos' });
  }

  const result = await pool.query(
    'INSERT INTO comments (chapter_id, author, content) VALUES ($1, $2, $3) RETURNING *',
    [chapterId, author, content]
  );

  res.status(201).json(result.rows[0]);
}

module.exports = { getBySeriesId, getByChapterId, createForSeries, createForChapter };
