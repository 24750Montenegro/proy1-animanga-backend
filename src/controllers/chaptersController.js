const pool = require('../db/pool');

async function getBySeries(req, res) {
  const { seriesId } = req.params;
  const result = await pool.query(
    'SELECT * FROM chapters WHERE series_id = $1 ORDER BY number ASC',
    [seriesId]
  );
  res.json(result.rows);
}

async function create(req, res) {
  const { seriesId } = req.params;
  const { number, title } = req.body;

  if (!number) {
    return res.status(400).json({ error: 'Numero de capitulo requerido' });
  }

  const result = await pool.query(
    'INSERT INTO chapters (series_id, number, title) VALUES ($1, $2, $3) RETURNING *',
    [seriesId, number, title || null]
  );

  res.status(201).json(result.rows[0]);
}

async function getById(req, res) {
  const { id } = req.params;

  const chapterResult = await pool.query('SELECT * FROM chapters WHERE id = $1', [id]);

  if (chapterResult.rows.length === 0) {
    return res.status(404).json({ error: 'Capitulo no encontrado' });
  }

  const commentsResult = await pool.query(
    'SELECT * FROM comments WHERE chapter_id = $1 ORDER BY created_at DESC',
    [id]
  );

  const chapter = chapterResult.rows[0];
  chapter.comments = commentsResult.rows;

  res.json(chapter);
}

module.exports = { getBySeries, create, getById };
