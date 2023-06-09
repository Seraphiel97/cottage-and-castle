import {useState, useEffect} from 'react'
import * as servicesAPI from '../../utilities/services-api'
import Packages from '../../components/Packages/Packages'
import { useNavigate } from 'react-router-dom'

export default function Services({user}) {
  const navigate = useNavigate()
  const [services, setServices] = useState([])

  // Instead of hard coding services, the useEffect fetches data from server
  useEffect(function() {
    async function getServices() {
      const packages = await servicesAPI.getServices();
      setServices(packages);
    }
    getServices()
  }, [])

  // Used by the button to take the user to the appointment request page
  function handleClick() {
   user ? navigate('/appointment') : navigate('/auth')
  }

  // Maps state data to the component for rendering
  const packages = services.map((service, index) => (
    <Packages service={service} key={index} />
  ))

  return (
    <div className="text-center">
      <h1 className="my-6">Services</h1>
      <div className="sm:grid grid-rows-3 md:grid grid-cols-3">
        {packages}
        <div className="col-span-3 text-center">
          <button className="bg-gradient-to-b from-pink to-mint hover:bg-gray font-bold py-2 px-4 rounded"
          onClick={handleClick}>
            Request Your Initial Appointment Today!
          </button>
        </div>
      </div>
      
  </div>
  )
}
