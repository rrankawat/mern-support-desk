const express = require('express')
require('colors')
require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

const PORT = process.env.PORT || 8000
const app = express()

// Connect to db
connectDB()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.status(200).json({ message: `Welcome to the Support Desk API` })
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))

// Custom Middleware
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
