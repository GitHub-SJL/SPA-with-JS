const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.get("/clothes/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
app.get("/shoes/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

// js 파일을 사용하기 위한 경로 설정
app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);

app.use("/", express.static(path.resolve(__dirname, "frontend")));

app.use(
  "/data",
  express.static(path.join(__dirname, "frontend", "src", "data"))
);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running...", `http://localhost:5000/`);
});
