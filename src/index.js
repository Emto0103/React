import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import InputTest from "./chp08/InputTest";
import ConfirmButton from "./chp08/ConfirmButton";
import ClickButton from "./chp08/ClickButton";
import Greeting from "./test/Greeting";
import LoginControl from "./chp09/LoginControl";
import MailBox from "./chp09/MailBox";
import LoginControl2 from "./chp09/LoginControl2";
import LandingPage from "./chp09/LandingPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <LandingPage/>
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
