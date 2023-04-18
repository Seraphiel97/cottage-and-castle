import React from 'react'

export default function RequestedAppt({request, user, handleUpdate}) {
  
  
    return (
    <div>
        <p>{request.baseService}</p>
        <p>{request.address}</p>
        <p>{request.date}</p>
        <p>{request.status}</p>
        {user.isAdmin
        ?
        <button onClick={() => handleUpdate(request)}>Confirm</button>
        :
        <button hidden='hidden'>Confirm</button>
        }
    </div>
  )
}
