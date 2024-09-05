import React from "react";

function ConfirmDialog(props){
    return (
        <div>
            <p>내용을 확인하셨으면 확인 버튼을 눌러주세요.</p>
            <button className='btn1'>확인</button>
            <button className='btn2'>확인</button>
            <button className='btn3'>확인</button>
        </div>
    )
}

export default ConfirmDialog;