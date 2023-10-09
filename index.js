const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
const route  = require('./src/resources/routes')
mongoose.connect('mongodb://127.0.0.1:27017/tours_manager')
  
  const database = mongoose.connection;

  database.on('error', (error) => {
      console.log(error)
  })
  
  database.once('connected', () => {
      console.log('Database Connected');
  })
app.use(express.json())
app.use(express.urlencoded())
route(app)
// Error handling middleware

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Lỗi xảy ra!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});