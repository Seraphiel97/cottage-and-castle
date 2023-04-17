import React from 'react'

export default function ConfirmedAppt({confirm}) {
  return (
    <div>
        <p>{confirm.baseService}</p>
        <p>{confirm.address}</p>
        <p>{confirm.date}</p>
        <p>{confirm.status}</p>
    </div>
  )
}
