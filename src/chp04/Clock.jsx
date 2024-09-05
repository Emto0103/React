import React from "react";

function Clock(props){
    return(
        <div>
            <h1>시간 테스트</h1>
            <h2 className='Clock'>{new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}

export default Clock;