import React from "react";

function Button(props){
    return (
        <button>
            <b>
                {props.children}
            </b>
        </button>
    )
}

export default Button;