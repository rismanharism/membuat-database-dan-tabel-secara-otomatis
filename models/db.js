const db = require('../config/database');

// Membuat database jika belum ada
const createDatabase = (callback) => {
  const dbName = process.env.DB_NAME || 'my_database';
  db.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`, (err) => {
    if (err) {
      console.error('Gagal membuat database:', err.message);
      return;
    }
    console.log(`Database '${dbName}' berhasil dibuat!`);
    if (callback) callback();
  });
};

// Membuat tabel jika belum ada
const createTables = () => {
  const dbName = process.env.DB_NAME || 'my_database';
  db.changeUser({ database: dbName }, (err) => {
    if (err) {
      console.error('Gagal mengubah pengguna database:', err.message);
      return;
    }

    const tableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    db.query(tableQuery, (err) => {
      if (err) {
        console.error('Gagal membuat tabel:', err.message);
        return;
      }
      console.log('Tabel berhasil dibuat!');
    });
  });
};

module.exports = { createDatabase, createTables };
