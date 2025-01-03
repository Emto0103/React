import React, {useState} from "react";

function NameForm(props){
    const [name, setName] = useState('요청사항을 입력하세요.')

    const handleChange = (event) => {
        setName(event.target.value);
    }
    const handleSubmit = (event) => {
        alert("입력한 이름: ${name}");
        event.preventDefault();
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                성명:
                <input type="text" value={name} onChange={handleChange}/>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default NameForm;