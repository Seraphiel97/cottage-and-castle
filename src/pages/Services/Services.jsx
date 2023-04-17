import {useState, useEffect} from 'react'
import * as servicesAPI from '../../utilities/services-api'

export default function Services() {
  
  const [services, setServices] = useState([])

  useEffect(function() {
    async function getServices() {
      const packages = await servicesAPI.getServices();
      setServices(packages);
    }
    getServices()
  }, [])

  return (
    <div>
      <h1>Services</h1>

    </div>
  )
}
