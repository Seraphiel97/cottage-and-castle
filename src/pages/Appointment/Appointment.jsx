import React from 'react'

export default function Appointment() {
  
  function handleSubmit(evt) {
    evt.preventDefault()
  }

  return (
    <>
    <h1>Appointment Request</h1>
    <form onSubmit={handleSubmit} className="container">
      <div>
        <label>Service Package:</label>
        <select />
      </div>
      <div>
        <label>Address:</label>
        <input />
      </div>
      <div>
        <label>Available Dates:</label>
        <input />
      </div>
      <div>
        <label>Scrub Scale:</label>
        <select />
      </div>
      <div>
        <label>House Size(square ft.):</label>
        <input />
      </div>
      <button type="submit">Submit Request</button>
    </form>
    </>
  )
}
