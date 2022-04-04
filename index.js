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

//get the movie list in the form of JSON
app.get('/movie', (req, res) => {
  res.json(movies)
})

//push a movie in the static movie list
app.post('/movie', (req, res) => {
  const movie = req.body

  console.log(movie)
  movies.push(movie)
  res.send('Movie is added to the list')
})
