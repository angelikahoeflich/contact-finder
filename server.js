const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

//connect db

connectDB()

//init middleware
app.use(express.json({extended:false}))

app.get('/', (req,res) => res.json({msg: 'welcome to the contact keeper api'}))

//define our routes

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

app.listen(port, () => console.log(`server started on port ${port}`))


