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



const UserRouter = require('./routers/userRouter');
const MulterRouter = require('./routers/multerRouter');

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
}));
app.use('/user', UserRouter);
app.use('/multer', MulterRouter);





app.get('/', (req, res) => {
  res.send('Hello World mmmm');
});

app.listen(process.env.PORT, () => {
  console.log('Server running on port 3000');
});