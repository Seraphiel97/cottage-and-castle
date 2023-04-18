import React from 'react'

export default function CompletedAppt(complete, user) {
  return (
    <div>
        <p>{complete.baseService}</p>
        <p>{complete.address}</p>
        <p>{complete.date}</p>
        <p>{complete.status}</p>
        {user.isAdmin
        ?
        <button>Not Complete</button>
        :
        <button hidden='hidden'>Not Complete</button>
        }
    </div>
  )
}
