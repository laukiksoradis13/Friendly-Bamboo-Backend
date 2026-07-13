import express from 'express'

const app = express();

app.get("/", (req, res) => {
  res.send("Hello AWS ! This is my new instance of EC2 server. ");
});

app.listen(5000);