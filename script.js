const template = document.createElement('template');
template.innerHTML = `
<style>
<style>
  .employee-card {
    font-family: sans-serif;
    background: #f4f6f7;
    width: 250px;
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 10px;
  }

</style>
<div class="employee-card">
  <img/>
  <div>
    <h3></h3>
    <div class="details">
      <p><slot name="id"/><b>ID: </b> </p>
      <p> <slot name = "job title"/><b>Job Title:</b></p>
      <p><slot name="email"/></p>
      <p><slot name="phone"/></p>
    </div>
  </div>
</div>`;

class EmployeeCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
        let idText = this.shadowRoot.querySelector('b').innerText += " " + this.getAttribute("id");
        this.shadowRoot.querySelector('b').innerText = idText;
        let jobTitle = this.shadowRoot.querySelectorAll("b")[1].innerText += " " + this.getAttribute("jobTitle");
        this.shadowRoot.querySelectorAll("b")[1].innerText = jobTitle;
    }

    connectedCallback() {
        this.h3 = this.getAttribute("name");
        this.render();
    }

    render() {
        this.h3;
    }
}
window.customElements.define('employee-card', EmployeeCard);

// let employee  = "<employee-card name='Amani Muller' avatar='' id='565'  jobTitle='Software Engineer'></employee-card>";

// for(let i = 0; i < 10; i++)
// {
//     let employee = new EmployeeCard();
//     document.body.appendChild(employee);
// }