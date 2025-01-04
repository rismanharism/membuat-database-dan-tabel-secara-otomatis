const express = require('express');
const dotenv = require('dotenv');
const { createDatabase, createTables } = require('./models/db');

dotenv.config();

const app = express();

// Memulai pembuatan database dan tabel saat aplikasi berjalan
createDatabase(() => {
  createTables();  // Setelah database dibuat, buat tabel
});

// Middleware
app.use(express.json());

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
