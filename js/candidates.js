import {getData} from './db.js';
const list=document.getElementById('candidateList');
getData('candidates').forEach(c=>{
  const div=document.createElement('div');
  div.className='card';
  div.innerHTML=`<h3>${c.name}</h3><p>${c.email}</p>`;
  list.appendChild(div);
});