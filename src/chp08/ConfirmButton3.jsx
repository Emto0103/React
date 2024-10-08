import React, {useState} from "react";

// bind 대신에 클래스 필드 문법으로 코드 변경
function ConfirmButton(props) {
    const[isConfirmed, setIsConfirmed] = useState(false);

    }

    function handleConfirm(){
        setIsConfirmed(prevIsConfirmed) => !prevIsConfirmed);
    }

    render() {
        return(
            <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
                ConfirmButton2 {this.state.isConfirmed? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default ConfirmButton