import React, {useState} from 'react'
import tableStyles from '../common/styles/table.module.css'
import { useDispatch } from 'react-redux'
import { boardActions } from '../../redux/reducers/boardReducer.ts';

export default function Board(){
    const [board, setBoard] = useState({
        title: '', article: ''
    })
    const dispatch = useDispatch()
    const handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target;
        setBoard({...board, [name]: value})
    }
    const handleClick = e => {
      window.location.href = "./list"
    }

    return (<form onSubmit={
        e => {
            e.preventDefault()
            alert('진행 1: 글쓰기 버튼 클릭')
            dispatch(boardActions.addArticleRequest(board))
            setBoard({
                title: '', article: ''
            })
        }
    }
    >
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th colSpan={2}><h2>게시판 글쓰기</h2></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><label>제 목</label></td>
                    <td><input type="text" onChange={handleChange} id="title" name="title" placeholder="제목 입력"/></td>
                </tr>
                <tr>
                    <td><label htmlFor="article">내용</label></td>
                    <td><input type="textarea"  id="article" name="article" onChange={handleChange} style={{height:200 + "px"}}></input></td>
                </tr>
                <tr>
                    <td colSpan={2}><input type="submit" value="올리기" onClick={handleClick}/></td>
                </tr>
            </tbody>
        </table>
    </form>)
}