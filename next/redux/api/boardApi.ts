import axios, {AxiosResponse} from 'axios'

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege...",
}

export interface BoardType{
    title: string;
    article: string;
}

export const addArticleApi = async (payload : 
    {title: string, article: string}) => {
        try{
            const response : AxiosResponse<unknown, BoardType[]> = 
            await axios.post(`${SERVER}/board/add`, payload, {headers})
            alert('진행 5 : 응답성공')
            return response.data
        }catch (err) {
            return err;
        }
    }