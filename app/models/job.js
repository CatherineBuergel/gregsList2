export default class Job {
  constructor(data) {
    this._id = data._id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
  }

  getTemplate() {
    return `

<div class="card col-3">
  <div class="card-body">
    <h5 class="card-title">${this.jobTitle}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Hours: ${this.hours}; Wage: ${this.rate}</h6>
    <p class="card-text">Description: ${this.description}</p>
    <button onclick="app.controllers.jobController.deleteJob('${this._id}')">Remove</button>
  </div>
</div>`



  }
}
