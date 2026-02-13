import {getData} from './db.js';
const jobList=document.getElementById('jobList');
const jobs=getData('jobs');
jobs.forEach(j=>{
  const div=document.createElement('div');
  div.className='card';
  div.innerHTML=`<h3>${j.title}</h3><p>${j.company}</p><a href="apply.html?id=${j.id}">Apply</a>`;
  jobList.appendChild(div);
});