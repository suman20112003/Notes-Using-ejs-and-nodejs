const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

let notes = [];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('layout', 'layout');

app.get('/', (req, res) => {
  res.render('index', { notes });
});

app.get('/new', (req, res) => {
  res.render('new');
});

app.post('/new', (req, res) => {
  const { title, content } = req.body;
  notes.push({ title, content });
  res.redirect('/');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
