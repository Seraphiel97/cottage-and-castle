import React from 'react'


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div>
        <img src="src/assets/businessLogo.png" className="w-full"/>
      </div>
      <div className="m-6 p-6 bg-gradient-to-t from-pink to-mint rounded-xl">
        <h2 >Mission Statement</h2>
        <div className="px-6">
          <p>
            At Cottage & Castle, we believe that cleaning is more than just a 
            chore. It's a magical transformation that turns a messy and chaotic 
            space into a beautiful and sparkling retreat. We use our cleaning 
            powers to create a sense of wonder and enchantment in every home we 
            clean.
          </p>
          <br/>
          <p>
            Our team of skilled cleaners is like a group of fairy godmothers, 
            bringing a touch of magic to every corner of your home. We wave our 
            magic wands, and your living room becomes a cozy haven, your kitchen 
            a place of delicious smells and warmth, and your bedroom a serene 
            sanctuary.
          </p>
          <br/>
          <p>
            Just like magic, our cleaning services are tailored to meet your 
            unique needs and preferences. Whether you live in a cozy cottage or 
            a majestic castle, we have the skills and expertise to transform your 
            space into a place of beauty and enchantment.
          </p>
          <br/>
          <p>
            At Cottage & Castle, we understand that your home is your kingdom, 
            and we're here to help you reign over it. Let us sprinkle a little 
            bit of magic into your life and experience the joy and wonder of a 
            clean and sparkling home.
          </p>
        </div>
      </div>
      <h2>Reviews</h2>
      <div className="justify-center md:inline-flex">
        <div className="mb-6 m-1 p-3 bg-gradient-to-b from-pink to-mint rounded-xl">
          <img href="https://images.unsplash.com/photo-1545317524-e0ccf9d87753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
          className="max-w-md ml-4 px-16 pb-3 md:max-w-xs mx-1"/>
          <h3>Dennis Byrd</h3>
          <p className="px-16">
            "I was extremely satisfied with the service provided by Cottage & Castle. They exceeded my expectations, and I would 
            highly recommend them to anyone looking for a reliable and 
            thorough cleaning service. I will definitely be using them again 
            in the future."
          </p>
        </div>
        <div className="mb-6 m-1 p-3 bg-gradient-to-b from-pink to-mint rounded-xl">
          <img src="./src/assets/farmhouse.jpg" className="max-w-md ml-4 px-16 pb-3 md:max-w-xs mx-1"/>
          <h3>Michael Baker</h3>
          <p className="px-16">
            "What impressed me the most was how they took care of the 
            hard-to-reach areas, such as the ceiling fans, window sills, 
            and baseboards. They even cleaned the blinds and the inside 
            of the microwave, which I had never thought of cleaning before."
          </p>
        </div>
        <div className="mb-6 m-1 p-3 bg-gradient-to-b from-pink to-mint rounded-xl shadow-lg">
          <img src="/src/assets/largehome.jpg" className="max-w-md ml-4 px-16 pb-3 md:max-w-xs mx-1"/>
          <h3>Lee Brown</h3>
          <p className="px-16">
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
