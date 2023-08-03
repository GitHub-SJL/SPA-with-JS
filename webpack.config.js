const path = require("path");

module.exports = {
  // 엔트리 포인트
  entry: "./frontend/src/index.js",

  // 출력 설정
  output: {
    filename: "bundle.js", // 출력 파일명
    path: path.resolve(__dirname, "public"), // 출력 경로
  },

  // 모듈 규칙 (예: Babel 사용 설정)
  module: {
    rules: [
      {
        test: /\.js$/, // .js 확장자를 가진 파일에 적용
        exclude: /node_modules/, // node_modules 폴더 제외
        use: {
          loader: "babel-loader", // Babel 로더 사용
          options: {
            presets: ["@babel/preset-env"], // 최신 자바스크립트 문법 트랜스파일링
          },
        },
      },
    ],
  },
};
