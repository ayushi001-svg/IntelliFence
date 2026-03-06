const express = require('express');
const db_var = require('./config/db_connection');
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middleware/authMiddleware');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/auth', authRoutes);
app.use(authMiddleware);
//other routes that require authentication can be added here

db_var.db_connection();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Running at http://localhost:${PORT}`);
});



