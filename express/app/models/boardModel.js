export default function BoardModel(mongoose){
    const boardSchema = mongoose.Schema(
        {   userid : String,
            title : String,
            article : String
        }, {timestamps: true}
    )
    return mongoose.model('Board', boardSchema)
}