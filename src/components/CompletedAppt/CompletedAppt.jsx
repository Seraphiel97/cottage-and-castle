import {useState, useEffect} from 'react'

export default function CompletedAppt({complete, user, handleUpdate}) {
  
  const [service, setPackage] = useState('')

  useEffect(function() {
    if (complete.baseService === '643d6cf7392f4c61d764bed8') {
      setPackage('Chariot Package')
    } else if (complete.baseService === '643d6cf7392f4c61d764bed9') {
      setPackage('Wagon Package')
    } else if (complete.baseService === '643d6cf7392f4c61d764beda') {
      setPackage('Carriage Package')
    }
  })
  
  return (
    <div>
        <p>{service}</p>
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
