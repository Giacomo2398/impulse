const axios = require("axios");
const router = require("express").Router();

router.get("/", function(req, res){
  // console.log(req.url);
  let searchTerm = req.url;
  console.log("================================")
  axios.get("https://api.giphy.com/v1/gifs/translate?api_key=8w2u2lXukV6bt1qcjMoDKhNKdhDIOYq1&s=" + searchTerm)
  .then(function(response){
    res.send(response.data.data.images)
  })
  .catch(function (error) {
    console.log(error);
  });
});

module.exports = router;

