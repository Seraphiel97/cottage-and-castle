import React from 'react'

export default function CompletedAppt(complete) {
  return (
    <div>
        <p>{complete.baseService}</p>
        <p>{complete.address}</p>
        <p>{complete.date}</p>
        <p>{complete.status}</p>
    </div>
  )
}
