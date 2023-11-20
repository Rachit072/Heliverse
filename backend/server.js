const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let users = require('./data.json');

app.use(bodyParser.json());
app.get('/api/users', (req, res) => {
  const page = req.query.page || 1;
  const perPage = 20;
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const totalPages = Math.ceil(users.length / perPage);
  const usersForCurrentPage = users.slice(startIndex, endIndex);

  res.json({
    users: usersForCurrentPage,
    totalPages,
  });
});
app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find((user) => user.id === parseInt(userId));
  
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}`);
  });