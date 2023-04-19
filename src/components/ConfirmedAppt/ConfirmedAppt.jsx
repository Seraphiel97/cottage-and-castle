import {useState, useEffect} from 'react'

export default function ConfirmedAppt({confirm, user, handleUpdate}) {
  
  const [service, setPackage] = useState('')

  useEffect(function() {
    if (confirm.baseService === '643d6cf7392f4c61d764bed8') {
      setPackage('Chariot Package')
    } else if (confirm.baseService === '643d6cf7392f4c61d764bed9') {
      setPackage('Wagon Package')
    } else if (confirm.baseService === '643d6cf7392f4c61d764beda') {
      setPackage('Carriage Package')
    }
  })

  return (
    <div>
        <p>{service}</p>
        <p>{confirm.address}</p>
        <p>{confirm.date}</p>
        <p>{confirm.status}</p>
        {user.isAdmin
        ?
        <button onClick={() => handleUpdate(confirm)}>Complete</button>
        :
        <button hidden='hidden'>Complete</button>
        }
    </div>
  )
}
