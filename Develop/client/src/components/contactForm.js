import React from 'react'
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send');
console.log(process.env.emailPass, 'pass')

  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conForm = {
      name: name.value,
      email: email.value,
      message: message.value,
    }

    fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(conForm),
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
    }).then((response) => (response.json())).then( (response) => { if (response.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if(response.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  

    console.log(conForm)
  }
  return (
    <div className="container mt-5 border border-primary p-3">
      <h2 className="mb-3">I'd love to hear from you!</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default ContactForm