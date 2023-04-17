import React from 'react'

export default function RequestedAppt({request}) {
  
  
    return (
    <div>
        <p>{request.baseService}</p>
        <p>{request.address}</p>
        <p>{request.date}</p>
        <p>{request.status}</p>
    </div>
  )
}
