const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT || 8000
const app = express()

app.get('/', (req, res) => {
  res.status(200).json({ msg: `Welcome to the Support Desk API` })
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
