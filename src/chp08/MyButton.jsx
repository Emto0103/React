import React from "react";
import button from "../chp04/Button";

// 이벤트 처리 함수에서 상태설정을 위해 사용하는 this를 bind 해야만 한다.
// bind 하지 않으면 this 부분에서
class MyButton extends React{

    constructor(props) {
        super(props);

        this.state={isToggleOn: true}
    }

    handleClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render(){
        return(
            <button onClick={() => this.handleClick()}>
                {this.state.isToggleOn ? "켜짐" : "꺼짐"}
            </button>
        );
    }
}
export default MyButton