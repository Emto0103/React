import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import InputTest from "./chp08/InputTest";
import ConfirmButton from "./chp08/ConfirmButton";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ConfirmButton2/>
    </React.StrictMode>
);
//
//     setInterval(()=>{
//             root.render(
//   <React.StrictMode>
//     <Clock/>
//   </React.StrictMode>
//         );
//     }
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
