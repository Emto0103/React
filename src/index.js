import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator3 from "./chp12/Calculator3";
import DistanceConverter from "./chp12/distance/DistanceConverter";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DistanceConverter/>
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

