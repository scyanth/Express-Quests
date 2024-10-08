const database = require("../../database");

const movies = [];

const getMovies = (req, res) => {
  database
    .query("select * from movies")
    .then(([movies]) => {
      res.json(movies);
    })
    .catch((err) => {
      res.sendStatus(500);
  });
};

const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("select * from movies where id = ?", [id])
    .then((result) => {
      if (result[0][0]){
        res.json(result[0][0]);
      }else{
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log(err);
    });
};

module.exports = {
  getMovies,
  getMovieById,
};
