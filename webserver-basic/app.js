const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json('Hello Express! Server berjalan dengan cepat!');
});

app.get('/data', (req, res) => {
  res.json({
    nama: 'ARI RIZAL ZALALUDIN',
    kampus: 'Universitas Nusaputra',
    matkul: 'Pemrograman berbasis platfrom'
  });
});

app.listen(8000, () => 
  console.log('Server Express berjalan di http://localhost:8000'));