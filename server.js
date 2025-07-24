// Task 2 + 4

import dotenv from 'dotenv';
import express from "express";

const server = express();
dotenv.config();

const port = process.env.PORT;

server.get("/", async (req, res) => {
  return res.json({ "env": "<NODE_ENV>", "port": 4000 });
})
server.listen(port), () => {
  console.log(`server started on port ${port}`);
};


