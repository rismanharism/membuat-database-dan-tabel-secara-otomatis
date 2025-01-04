const { createDatabase, createTables } = require('../models/db');

const initializeDatabase = (req, res) => {
  createDatabase();
  createTables();
  res.send('Database dan tabel berhasil diinisialisasi!');
};

module.exports = { initializeDatabase };
