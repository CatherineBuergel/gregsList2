import JobService from "./jobService.js";

//PRIVATE 
let _js = new JobService()

function draw() {
  let jobs = _js.Jobs
  let template = ''
  jobs.forEach(job => {
    template += job.getTemplate()
  })
  document.getElementById('available-content').innerHTML = template
  document.getElementById('form-content').innerHTML = `            
    <form onsubmit="app.controllers.jobController.addJob(event)">
        <input type="text" name="company" placeholder="Company" required>
        <input type="text" name="title" placeholder="Title" required>
        <input type="number" name="hours" placeholder="hours" required>
        <input type="text" name="description" placeholder="Description">
        <input type="number" name="wage" placeholder="Wage" required>
        <button type="submit">Submit</button>
    </form>`
}

//public
export default class JobController {
  constructor() {
    _js.addSubscriber('jobs', draw)
  }

  getJobs() {
    _js.getApiJobs()
  }

  addJob(event) {
    debugger
    event.preventDefault();
    let form = event.target
    let newjob = {
      company: form.company.value,
      jobTitle: form.title.value,
      hours: form.hours.value,
      rate: form.wage.value,
      description: form.description.value,

    }
    _js.addJob(newjob)
    //Clears the form
    form.reset()

  }

  deleteJob(id) {
    _js.deleteJob(id)
  }
}