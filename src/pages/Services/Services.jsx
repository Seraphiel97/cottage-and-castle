import {useState, useEffect} from 'react'
import * as servicesAPI from '../../utilities/services-api'
import Packages from '../../components/Packages/Packages'

export default function Services() {
  
  const [services, setServices] = useState([])

  useEffect(function() {
    async function getServices() {
      const packages = await servicesAPI.getServices();
      setServices(packages);
    }
    getServices()
  }, [])

  const packages = services.map((service, index) => (
    <Packages service={service} key={index} />
  ))

  return (
    <div>
      <h1>Services</h1>
      {packages}
    </div>
  )
}
