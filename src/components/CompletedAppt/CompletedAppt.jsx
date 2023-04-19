import {useState, useEffect} from 'react'

export default function CompletedAppt({complete, user, handleUpdate}) {
  
  const [service, setPackage] = useState('')
  const [date, setDate] = useState('')

  useEffect(function() {
    if (complete.baseService === '643d6cf7392f4c61d764bed8') {
      setPackage('Chariot Package')
    } else if (complete.baseService === '643d6cf7392f4c61d764bed9') {
      setPackage('Wagon Package')
    } else if (complete.baseService === '643d6cf7392f4c61d764beda') {
      setPackage('Carriage Package')
    }
    const transformedDate = new Date(complete.date)
    const formattedDate = transformedDate.toLocaleString();
    setDate(formattedDate)
  })
  
  return (
    <div className="m-3">
        <p>{service}</p>
        <p>{complete.address}</p>
        <p>{date}</p>
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
