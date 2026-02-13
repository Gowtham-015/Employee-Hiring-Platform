import { getData, saveData } from './db.js';

const form = document.getElementById('jobForm');
const adminJobs = document.getElementById('adminJobs');

function render() {
  adminJobs.innerHTML = '';
  
  getData('jobs').forEach(j => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <h3>${j.title}</h3>
      <p>${j.company}</p>
      <p>${j.location}</p>
    `;
    adminJobs.appendChild(div);
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const jobs = getData('jobs');

  jobs.push({
    id: Date.now(),
    title: title.value,
    company: company.value,
    location: location.value
  });

  saveData('jobs', jobs);
  render();
  form.reset();
});

render();
