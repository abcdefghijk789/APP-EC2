import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("application- ec2 running");
});

app.listen(80, () => {
  console.log("port listen on 80");
});
