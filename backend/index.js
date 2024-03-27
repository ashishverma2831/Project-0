const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();

mongoose.connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });

  console.log(process.env.PORT);

const UserRouter = require('./routers/userRouter');

// app.use(express.json());
// app.use(cors({
//     origin: 'http://localhost:5173',
// }));
// app.use('/user', UserRouter);


app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(process.env.PORT, () => {
  console.log('Server running on port 3000');
});