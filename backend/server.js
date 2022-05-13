const express = require('express')
require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')

const PORT = process.env.PORT || 8000
const app = express()

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
