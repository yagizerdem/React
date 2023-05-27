import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { tab } from '@testing-library/user-event/dist/tab';
var id = 4;
function printData(obj){
  const table = document.getElementById("infotable");
  const tempData =`
  <tr>
  <th scope="row">${id}</th>
  <td>${obj.name}</td>
  <td>${obj.mail}</td>
</tr>
  `;
  table.insertAdjacentHTML('beforeend',tempData);
  id++;
}
function dataInfo(obj){
  console.log(obj);
  printData(obj);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App mainDataInfo={dataInfo}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
