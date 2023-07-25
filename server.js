const express = require("express");
const path = require("path");

const app = express();

app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);

app.use("/frontend", express.static(path.resolve(__dirname, "frontend")));

// '/frontend/src' 경로에 대한 정적 파일 미들웨어 추가
app.use(
  "/frontend/src",
  express.static(path.resolve(__dirname, "frontend", "src"))
);

// Single page이기 때문에,
// 모든 경로에서 index.html을 불러온다.
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running...", `http://localhost:5000/`);
});
