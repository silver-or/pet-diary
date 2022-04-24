import axios from "axios"
import tableStyles from "../common/styles/table.module.css"
import {useEffect, useState} from "react"

const Table = ({columns, colspan, data}) => {
    return (
        <table className={tableStyles.table}>
            <thead>
                <tr className={tableStyles.tr}>
                    {columns.map((column, index) => (
                        <th key={index} className={tableStyles.td}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.length == 0 ? 
                <tr className={tableStyles.tr}>
                    <td colSpan={colspan} className={tableStyles.td}>데이터가 없습니다.</td>
                </tr>
                : data.map((board) => (
                    <tr className={tableStyles.tr} key={board.title}>
                        <td className={tableStyles.td}>{board.title}</td>
                        <td className={tableStyles.td}>{board.content}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default function UserList(){
    const columns = ["글제목", "내용"]
    const [data, setData] = useState([])
    const proxy = 'http://localhost:5000'
    useEffect(() => {
        axios.get(proxy + '/board/list')
        .then(res => {
            console.log(res.data.boards)
            setData(res.data.boards)
        })
        .catch(err => {})
    }, [])
    return(<>
        <h1>글 목록</h1>
        <div className={tableStyles.td}>
            <Table columns={columns} colspan={2} data={data}/>
        </div>
    </>)
}