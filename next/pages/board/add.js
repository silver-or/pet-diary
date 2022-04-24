import React, {useState} from 'react'
import tableStyles from '../common/styles/table.module.css'
import { useDispatch } from 'react-redux'
import { boardActions } from '../../redux/reducers/boardReducer.ts';
import Button from '@mui/material/Button';
import theme from '../common/myTheme.js';
import { ThemeProvider } from '@mui/material/styles';

export default function Board(){
    const [board, setBoard] = useState({
        title: '', content: ''
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
                title: '', content: ''
            })
        }
    }
    >
        {/* <table className={tableStyles.table}>
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
                    <td><label htmlFor="content">내용</label></td>
                    <td><input type="textarea"  id="content" name="content" onChange={handleChange} style={{height:200 + "px"}}></input></td>
                </tr>
                <tr>
                    <td colSpan={2}><input type="submit" value="올리기" onClick={handleClick}/></td>
                </tr>
            </tbody>
        </table> */}
        <ThemeProvider theme={theme}>
            <div style={{width:700 + "px", height:200 + "px"}}>
                <label><b>제목</b></label> <br/>
                <input type="text" onChange={handleChange} id="title" name="title" placeholder="제목 입력" style={{width:700 + "px"}}/>
                <hr/>
                <input type="textarea"  id="content" name="content" onChange={handleChange} placeholder="내용 입력" style={{width:700 + "px", height:200 + "px"}}></input>
                <br/><br/>
                <Button type="submit" onClick={handleClick} variant="outlined" size="small" style={{float:"right", display: "flex"}}> 등록 </Button>
            </div>
        </ThemeProvider>

    </form>)
}