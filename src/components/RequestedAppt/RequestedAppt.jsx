import {useState, useEffect} from 'react'

export default function RequestedAppt({request, user, handleUpdate}) {
  
 // State that allows for the formatting of data from a document
 const [service, setPackage] = useState('')
 const [date, setDate] = useState('')

 // Uses the state to render the data more readably
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
    <div className="my-3 mx-12 p-2 border-solid border-2 rounded-lg bg-charcoal">
        <p>{service}</p>
        <p>{request.address}</p>
        <p>{date}</p>
        <p>{request.status}</p>
        {user.isAdmin
        ?
        <button onClick={() => handleUpdate(request)}
        className="bg-gradient-to-b from-pink to-mint hover:bg-charcoal text-white font-bold py-2 px-4 rounded-lg">
          Confirm
        </button>
        :
        <button hidden='hidden'>Confirm</button>
        }
    </div>
  )
}
