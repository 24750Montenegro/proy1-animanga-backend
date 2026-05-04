const fs = require('fs');
const path = require('path');
const pool = require('./pool');

async function migrate() {
  const sql = fs.readFileSync(path.join(__dirname, 'init.sql'), 'utf-8');
  try {
    await pool.query(sql);
    console.log('Migracion ejecutada correctamente');
  } catch (err) {
    console.error('Error en migracion:', err.message);
  } finally {
    await pool.end();
  }
}

migrate();
