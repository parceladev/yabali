import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'db_yabali',
});

app.get('/donatur', (req, res) => {
  const query = 'SELECT * FROM donatur';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
