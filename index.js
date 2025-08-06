const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

let todos = [];

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { todos });
});

app.post('/add', (req, res) => {
  const { todo } = req.body;
  if (todo) {
    todos.push(todo);
  }
  res.redirect('/');
});

app.post('/delete/:index', (req, res) => {
  const index = req.params.index;
  todos.splice(index, 1);
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
