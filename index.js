const express = require('express')
const app = express

let movies = [
  {
    id: 1,
    title: 'nome filme',
    director: 'nome diretor',
    releaseDate: '20-02-2020'
  },
  {
    id: 2,
    title: 'nome filme',
    director: 'nome diretor',
    releaseDate: '20-02-2020'
  }
]


app.get('/movie', (req, res) => {
  res.json(movies)
})

