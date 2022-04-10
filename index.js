const express = require("express");
const app = express();
const port = 3000;

//parse JSON using express
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

let movies = [
  {
    id: "1",
    title: "nome filme",
    director: "nome diretor",
    releaseDate: "20-02-2020",
  },
  {
    id: "2",
    title: "nome filme",
    director: "nome diretor",
    releaseDate: "20-02-2020",
  },
];

//get the movie list in the form of JSON
app.get("/movie", (req, res) => {
  res.json(movies);
});

//get a movie in the movie list by id
app.get("/movie/:id", (req, res) => {
  const id = req.params.id;

  for (let movie of movies) {
    if (movie.id === id) {
      res.json(movie);
      return;
    }
  }

  res.status(404).send("Movie not foundd");
});

//push a movie in the static movie list
app.post("/movie", (req, res) => {
  const movie = req.body;

  console.log(movie);
  movies.push(movie);
  res.send("Movie is added to the list");
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
