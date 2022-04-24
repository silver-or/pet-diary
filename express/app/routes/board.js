import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import BoardService from "../services/boardService.js"

const corsOptions = {
    origin : process.env.ORIGIN,
    optionsSuccessStatus : 200
}

const app = express()
app.use(cors())

app.use(function(_req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

app.post('/add', cors(corsOptions), (req, res) => {
    // const service = new BoardService()
    // res.status(200).json(service.add(req, res))
    console.log("express add 진입")
    BoardService().add(req, res)
})

app.get('/list', cors(corsOptions), (req, res) => {
    // const service = new BoardService()
    // res.status(200).json(service.getArticles(req, res))
    BoardService().getArticles(req, res)
})

export default app