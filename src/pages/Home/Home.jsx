import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h1>Cottage & Castle (logo)</h1>
      <div>
        <img src="./src/assets/kitchen.jpg" className="max-w-md md:max-w-2xl"/>
        <h2>Mission Statement</h2>
      </div>
      <h2>Reviews</h2>
      <div className="md:inline-flex">
        <div>
          <img src="./src/assets/apartments.jpg" className="max-w-xs mx-1 rounded-lg"/>
          <h3>Dennis Byrd</h3>
          <p>Review</p>
        </div>
        <div>
          <img src="./src/assets/farmhouse.jpg" className="max-w-xs mx-1 rounded-lg"/>
          <h3>Michael Baker</h3>
          <p>Review</p>
        </div>
        <div>
          <img src="./src/assets/largehome.jpg" className="max-w-xs mx-1 rounded-lg"/>
          <h3>Lee Brown</h3>
          <p>Review</p>
        </div>
      </div>
    </div>
  )
}
