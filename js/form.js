import {getData,saveData} from './db.js';
const form=document.getElementById('applyForm');
const params=new URLSearchParams(window.location.search);
document.getElementById('jobId').value=params.get('id');
form.addEventListener('submit',e=>{
  e.preventDefault();
  const candidates=getData('candidates');
  candidates.push({
    id:Date.now(),
    name:name.value,
    email:email.value,
    jobId:jobId.value
  });
  saveData('candidates',candidates);
  alert('Applied Successfully');
});