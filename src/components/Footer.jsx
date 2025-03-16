import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
            <div>
                <img src={assets.logo} className='mb-5 w-32 ' alt="" />
                <p className='w-full md:w-2/3 text-gray-600  '>Modi quibusdam vitae dignissimos mollitia in quisquam sunt esse sint quae cupiditate perferendis, possimus hic sit excepturi doloremque tenetur repudiandae minima. Totam?</p>

            </div>
            <div>
                <p className='text-xl font-medium mb-5 '>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600 '>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery </li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5 '>Get In Touch</p>
                <ul className='flex flex-col gap-1 text-gray-600 '>
                    <li>020-283-456-55</li>
                    <li>contact@gmail.com</li>

                </ul>
            </div>

        </div>
      <div className=''>
        <hr/>
        <p className='py-5 text-sm text-center '>copyright 2024@</p>

      </div>
    </div>
  )
}

export default Footer
