const database = require("../../database");

const users = [];

const getUsers = (req, res) => {
  database
    .query("select * from users")
    .then(([users]) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.sendStatus(500);
  });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("select * from users where id = ?", [id])
    .then((result) => {
      if (result[0][0]){
        res.status(200).json(result[0][0]);
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
  getUsers,
  getUserById,
};