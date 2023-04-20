import {useState, useEffect} from 'react'
import * as servicesAPI from '../../utilities/services-api'
import Packages from '../../components/Packages/Packages'
import { useNavigate } from 'react-router-dom'

export default function Services() {
  const navigate = useNavigate()
  const [services, setServices] = useState([])

  useEffect(function() {
    async function getServices() {
      const packages = await servicesAPI.getServices();
      setServices(packages);
    }
    getServices()
  }, [])

  function handleClick() {
    navigate('/appointment')
  }

  const packages = services.map((service, index) => (
    <Packages service={service} key={index} />
  ))

  return (
    <div className="text-center">
      <h1 className="my-6">Services</h1>
      <div className="sm:grid grid-rows-3 md:grid grid-cols-3">
        {packages}
        <div className="col-span-3 text-center">
          <button className="bg-teal hover:bg-indigo text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}>
            Request Your Initial Appointment Today!
          </button>
        </div>
      </div>
      
  </div>
  )
}
