const mysql = require('mysql');

// Konfigurasi koneksi database
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
};

// Membuat koneksi
const db = mysql.createConnection(dbConfig);

// Menghubungkan ke MySQL
db.connect((err) => {
  if (err) {
    console.error('Koneksi ke database gagal:', err.message);
    return;
  }
  console.log('Koneksi ke database berhasil!');
});

module.exports = db;
