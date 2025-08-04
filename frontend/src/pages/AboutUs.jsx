import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const AboutUs = () => {
  const navigate = useNavigate()
  return (
    <section className="bg-blue-100 py-12 px-4 md:px-20 rounded-2xl">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <img src={assets.about1} alt="Helping hands" className="rounded-2xl shadow-lg" />
    <div>
      <h2 className="text-3xl font-bold text-primary mb-4">About Us</h2>
      <p className="mb-4 text-gray-700">
        We are a non-profit dedicated to empowering communities through education and health. Since 2019, we've impacted 3000+ lives.
      </p>
      <ul className="list-disc ml-5 text-gray-600">
        <li>📚 Literacy & Learning Programs</li>
        <li>🍽️ Food & Health Support</li>
        <li>🌍 Sustainable Development Drives</li>
      </ul>
      <div className="mt-6">
        <button onClick={()=>navigate("/volunter")} className="bg-primary  px-5 py-3 rounded-lg bg-amber-300 text-black ">Become a Volunteer</button>
      </div>
    </div>
  </div>
</section>

  )
}

export default AboutUs