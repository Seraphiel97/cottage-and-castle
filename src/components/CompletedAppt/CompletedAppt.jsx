import React from 'react'

export default function CompletedAppt(complete, user, handleUpdate) {
  return (
    <div>
        <p>{complete.baseService}</p>
        <p>{complete.address}</p>
        <p>{complete.date}</p>
        <p>{complete.status}</p>
        {user.isAdmin
        ?
        <button onClick={() => handleUpdate(complete)}>Not Complete</button>
        :
        <button hidden='hidden'>Not Complete</button>
        }
    </div>
  )
}
