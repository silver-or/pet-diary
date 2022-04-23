import db from "../models/index.js"
import Repository from '../config/dbConfig.js'
import dotenv from 'dotenv'

export default function BoardService(){
    const Board = db.Board
    dotenv.config()
    
    return {
        add(req, res){
            console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
            new Board(req.body).save(function (err) {
                if (err) {
                    res
                        .status(500)
                        .send({message: err});
                    console.log('글쓰기 실패')
                    return;
                } else {
                    // res
                    //     .status(200)
                    //     .json({ok: 'ok'})
                }
                console.log('글쓰기 성공')
            })
        },
        getArticles(req, res){
            Board.find()
            .exec((err, boards) => {
                if (err) return res.status(400).send(err)
                res.status(200).json({success:true, boards})
            })
        }
    }
}