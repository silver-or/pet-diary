import React from 'react';
// import 'features/common/style/Button.scss'
export default function Logout(){
    return (<><a>정말 로그아웃하시겠습니까?</a>
    <a className="arrow-btn" style={{cursor:"pointer"}}
        onClick = {e => {
            e.preventDefault()
            e.stopPropagation()
            localStorage.clear(e)
            window.location.href="/"
        }}> 예
    </a></>)
}