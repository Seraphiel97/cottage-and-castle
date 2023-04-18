import React from 'react'

export default function ConfirmedAppt({confirm, user}) {
  return (
    <div>
        <p>{confirm.baseService}</p>
        <p>{confirm.address}</p>
        <p>{confirm.date}</p>
        <p>{confirm.status}</p>
        {user.isAdmin
        ?
        <button>Complete</button>
        :
        <button hidden='hidden'>Complete</button>
        }
    </div>
  )
}
