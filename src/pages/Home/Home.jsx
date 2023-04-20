import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h1>Cottage & Castle (logo)</h1>
      <div>
        <img src="./src/assets/kitchen.jpg" className="max-w-md md:max-w-2xl"/>
        <h2>Mission Statement</h2>
      </div>
      <p>
        At Cottage & Castle, we believe that cleaning is more than just a 
        chore. It's a magical transformation that turns a messy and chaotic 
        space into a beautiful and sparkling retreat. We use our cleaning 
        powers to create a sense of wonder and enchantment in every home we 
        clean.
      </p>
      <p>
        Our team of skilled cleaners is like a group of fairy godmothers, 
        bringing a touch of magic to every corner of your home. We wave our 
        magic wands, and your living room becomes a cozy haven, your kitchen 
        a place of delicious smells and warmth, and your bedroom a serene 
        sanctuary.
      </p>
      <p>
        Just like magic, our cleaning services are tailored to meet your 
        unique needs and preferences. Whether you live in a cozy cottage or 
        a majestic castle, we have the skills and expertise to transform your 
        space into a place of beauty and enchantment.
      </p>
      <p>
        At Cottage & Castle, we understand that your home is your kingdom, 
        and we're here to help you reign over it. Let us sprinkle a little 
        bit of magic into your life and experience the joy and wonder of a 
        clean and sparkling home.
      </p>
      <h2>Reviews</h2>
      <div className="md:inline-flex">
        <div>
          <img src="./src/assets/apartments.jpg" className="max-w-xs mx-1 rounded-lg"/>
          <h3>Dennis Byrd</h3>
          <p>
            "I was extremely satisfied with the service provided by Cottage & Castle. They exceeded my expectations, and I would 
            highly recommend them to anyone looking for a reliable and 
            thorough cleaning service. I will definitely be using them again 
            in the future."
          </p>
        </div>
        <div>
          <img src="./src/assets/farmhouse.jpg" className="max-w-xs mx-1 rounded-lg"/>
          <h3>Michael Baker</h3>
          <p>
            "What impressed me the most was how they took care of the 
            hard-to-reach areas, such as the ceiling fans, window sills, 
            and baseboards. They even cleaned the blinds and the inside 
            of the microwave, which I had never thought of cleaning before."
          </p>
        </div>
        <div>
          <img src="./src/assets/largehome.jpg" className="max-w-xs mx-1 rounded-lg"/>
          <h3>Lee Brown</h3>
          <p>
            "I was really impressed with their work. They arrived on time and 
            were very friendly and professional throughout the entire process.
            They were thorough in their cleaning, and I could tell that 
            they paid attention to every detail."
          </p>
        </div>
      </div>
    </div>
  )
}
