const express = require("express");
const cors = require("cors");
const axios = require("axios");
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.post("/compile", (req, res) => {
  let { code, language, input } = req.body;

  if (language === "python") {
    language = "py";
  }

  const data = {
    code: code,
    language: language,
    input: input,
  };

  let config = {
    method: "post",
    url: "https://codexweb.netlify.app/.netlify/functions/enforceCode",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

if(process.env.NODE_ENV === 'production'){
  app.use(express.static("client/build"));
  app.get("*", (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
