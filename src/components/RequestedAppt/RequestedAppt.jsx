import React from 'react'

export default function RequestedAppt({request, user}) {
  
  
    return (
    <div>
        <p>{request.baseService}</p>
        <p>{request.address}</p>
        <p>{request.date}</p>
        <p>{request.status}</p>
        {user.isAdmin
        ?
        <button>Confirm</button>
        :
        <button hidden='hidden'>Confirm</button>
        }
    </div>
  )
}
