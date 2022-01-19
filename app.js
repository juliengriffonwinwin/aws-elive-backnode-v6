const express = require('express')
const app = express() 

app.get('/', (req, res) => {
    res.send('Hello World 2')
})

app.get('/hello', (req, res) => {
    res.json({message: 'Hello World'})
})

const PORT = process.env.PORT || 8081 

app.listen(PORT, () => {
    console.log('Server is running...')
})
