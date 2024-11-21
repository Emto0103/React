import React, {useState} from "react";
import Library from "../chp03/Library";

function NameRequestForm(props){
    const [name, setName] = useState('')
    const [details, setDetails] = useState('');
    const [fruits, setFruits] = useState('수박');
    const [file, setFile] = useState('');

    const handleChange = (event) => {
        const{target} = event;
        switch (target.id) {
            case "name":
                setName(event.target.value.toUpperCase());
                break;
            case "details":
                setDetails(target.value);
                break;
            case "fruits":
                setFruits(target.value);
                break;
            case "file":
                setFile(target.value);
                break;
        }

    }
    const handleSubmit = (event) => {
        alert(`
              입력한 이름: ${name}
              상세한 내용: ${details}
              선택한 과일: ${fruits}
              선택한 파일: ${file ? file.name : "선택되지 않음"}
            `);
        event.preventDefault();
    }
    return(
        <form onSubmit={handleSubmit}>
            <br/><br/>
            <label>
                성명:
                <input id="name"type="text" value={name} onChange={handleChange}/>
            </label><br/><br/>
            <label>
                요청사항:
                <textarea id="details" value={details} onChange={handleChange}/>
            </label>
            <label>
                좋아하는 과일선택:
                <select id="fruits" value={fruits} onChange={handleChange}>
                    <option>수박</option>
                    <option>사과</option>
                    <option>포도</option>
                    <option>바나나</option>
                </select>
            </label><br/><br/>
            <label>
                파일 선택:
                <input id="file" type="text" onChange={handleChange}/>
            </label><br/><br/>
            <button type="submit">제출</button>
        </form>
    );
}

export default NameRequestForm;