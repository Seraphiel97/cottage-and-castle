import {useState, useEffect} from 'react'

export default function RequestedAppt({request, user, handleUpdate}) {
  
  const [service, setPackage] = useState('')
  const [date, setDate] = useState('')

  useEffect(function() {
    if (request.baseService === '643d6cf7392f4c61d764bed8') {
      setPackage('Chariot Package')
    } else if (request.baseService === '643d6cf7392f4c61d764bed9') {
      setPackage('Wagon Package')
    } else if (request.baseService === '643d6cf7392f4c61d764beda') {
      setPackage('Carriage Package')
    }
    const transformedDate = new Date(request.date)
    const formattedDate = transformedDate.toLocaleString();
    setDate(formattedDate)
  })
  
    return (
    <div className="my-3 mx-12 p-2 border-solid border-2 rounded-lg">
        <p>{service}</p>
        <p>{request.address}</p>
        <p>{date}</p>
        <p>{request.status}</p>
        {user.isAdmin
        ?
        <button onClick={() => handleUpdate(request)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Confirm
        </button>
        :
        <button hidden='hidden'>Confirm</button>
        }
    </div>
  )
}
