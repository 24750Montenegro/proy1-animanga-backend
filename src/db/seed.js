const fs = require('fs');
const path = require('path');
const pool = require('./pool');

async function seed() {
  const sql = fs.readFileSync(path.join(__dirname, 'seed.sql'), 'utf-8');
  try {
    await pool.query(sql);
    console.log('Seed ejecutado correctamente');
  } catch (err) {
    console.error('Error en seed:', err.message);
  } finally {
    await pool.end();
  }
}

seed();
