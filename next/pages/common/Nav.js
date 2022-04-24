import React, {useState} from 'react'
// import Link from "next/link";
import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import tableStyles from "../common/styles/table.module.css"
import MenuItem from '@mui/material/MenuItem';
import theme from './myTheme';
import { ThemeProvider } from '@mui/material/styles';

export default function Nav(){
  const boardUrls = ["/board/add","/board/list", "/board/list2", "/board/modify","/board/remove"]
  const boardSubTitle = ["글 등록", "글 목록", "글 목록2", "글 수정", "글 삭제"]

  let userUrls = []
  let userSubTitle = []

  if (typeof window !== 'undefined') {
    if(localStorage.getItem("loginUser")) {
      userUrls = ["/user/logout","/user/profile","/user/modify","/user/withdraw"]
      userSubTitle = ["로그아웃", "프로필", "회원 수정", "회원 탈퇴"]
    } else {
        userUrls = ["/user/join","/user/login"]
        userSubTitle = ["회원가입","로그인"]
    }
  }

  return (
    <table className={tableStyles.nav}>
      <tbody>
          <tr>
            <td>
              <SubMenu title={"User"} urls={userUrls} subTitles={userSubTitle}/>
              <SubMenu title={"Board"} urls={boardUrls} subTitles={boardSubTitle}/>
            </td>
          </tr>
      </tbody>
    </table>
  );
}
const SubMenu = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return <><ThemeProvider theme={theme}><Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {props.title}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      {props.urls.map(function(url, i){
        return <MenuItem onClick={handleClose} key={i}><Link href={url} key={i} underline="none" color="inherit">{props.subTitles[i]}</Link></MenuItem>
      })}
      </Menu></ThemeProvider></>
}