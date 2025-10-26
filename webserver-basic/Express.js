const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Selamat datang di server kelompok Chernobyl!');
});

app.get('/info', (req, res) => {
  res.send('Server berjalan dengan baik pada hari ini. Semangat ngoding!');
});

app.get('/anggota', (req, res) => {
  res.json({
    kelompok: 'Kelompok Chernobyl',
    anggota: [
      { nama: 'ARI RIZAL ZALALUDIN' },
      { nama: 'SITI FARDA ' },
      { nama: 'MUHAMMAD FATUR RAHMAN'}
    ]
  });
});

app.listen(8080, () => {
  console.log('Server Express berjalan di http://localhost:8080');
});     