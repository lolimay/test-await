import http from "http";
import hello from "./module";

async function welcome(req, res) {
  const result = await hello();
  res.end(result);
}

http
  .createServer((req, res) => {
    welcome();
  })
  .listen(80);

welcome();
