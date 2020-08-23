import express from 'express'
const app = express()

app.get('/', (req, res) => {
  return res.json({ nome: 'pedro henrique' })
})
app.listen(3333)
