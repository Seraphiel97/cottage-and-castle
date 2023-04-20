import React from 'react'

export default function Packages({service}) {

  return (
    <div className="sm: mb-3 mx-3 py-6 border-solid border-2 rounded-lg text-lg bg-gradient-to-t from-pink to-mint">
        <h2 className="font-medium mb-1">{service.name} Package:</h2>
        <div className="my-1">
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
        </div>
        <h2 className="mt-1">For as little as ${service.price}!</h2>
    </div>
  )
}
