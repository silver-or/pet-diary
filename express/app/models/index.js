// mongoose 연결
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import UserModel from './userModel.js'
import BoardModel from './boardModel.js'
mongoose.Promise = global.Promise

const db = {} // 빈 땅에 db라는 이름을 줌
db.mongoose = mongoose
db.url = dotenv.MONGO_URI
db.User = new UserModel(mongoose)
db.Board = new BoardModel(mongoose)

export default db