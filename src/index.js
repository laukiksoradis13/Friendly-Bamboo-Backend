import express from 'express'

const app = express();

app.get("/", (req, res) => {
  res.send("Hello AWS ! This is my new instance of EC2 server with CI/CD pipeline and auto deployment using GitHub Actions.");
});

app.listen(5000);