import React from 'react'

export default function Packages({service}) {
  return (
    <div>
        <h2>{service.name} Package:</h2>
        <p>Dusting: {service.dusting ? 'Yes' : 'No'}</p>
        <p>Floors: {service.floors ? 'Yes' : 'No'}</p>
        <p>Kitchen Surfaces: {service.kitchenSurfaces ? 'Yes' : 'No'}</p>
        <p>Bathroom Surfaces: {service.bathroomSurfaces ? 'Yes' : 'No'}</p>
        <p>Cabinet Cleaning: {service.cabinetCleaning ? 'Yes' : 'No'}</p>
        <p>Interior Windows: {service.interiorWindows ? 'Yes' : 'No'}</p>
        <p>Baseboards: {service.baseboards ? 'Yes' : 'No'}</p>
        <p>Refrigerator Interior: {service.refrigeratorInterior ? 'Yes' : 'No'}</p>
        <p>Oven Degrease: {service.ovenDegrease ? 'Yes' : 'No'}</p>
        <p>Organization: {service.organization ? 'Yes' : 'No'}</p>
        <h3>For as little as ${service.price}!</h3>
    </div>
  )
}
