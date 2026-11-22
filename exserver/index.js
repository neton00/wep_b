// express 모듈 불러오기
const express = require('express');
//서버생성
const app = express();
// 포트설정
const PORT = Number(process.env.PORT) || 3000;

//라우팅 설정
app.length("/", (req, res)=>{
    res.status(200);
    res.send("hello, node");
});

// 서버 실행
app.listen(PORT, ()=>{
    console.log(`${PORT}번 포트로 서버 실행`);
});