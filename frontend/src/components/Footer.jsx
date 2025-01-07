import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'


const Footer = () => {
    return (
        <>
            <div className='md:mx-5'>

                <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>


                    {/* Left section */}

                    <div>
                        <img className='w-40 mb-5' src={assets.logo} alt="" />
                        <p className='w-full leading-6 text-gray-600 md:w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ea quidem. Libero, provident rem voluptatibus repellat a adipisci, fugiat autem eaque numquam aliquam id tempora, officia ipsum sequi repellendus quae.</p>

                    </div>


                    {/* center section */}

                    <div>
                        <p className='mb-5 text-xl font-medium'>Company</p>
                        <ul className='flex flex-col gap-2 text-gray-600'>
                            <NavLink to='/'>
                                <a href="#">Home</a>
                            </NavLink>

                            <NavLink to='/about'>
                                <a href="#">About Us</a>
                            </NavLink>

                            <NavLink to='/contact'>
                                <a href="#">Contact Us</a>
                            </NavLink>
                            
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>


                    {/* right section */}

                    <div>

                        <p className='mb-5 text-xl font-medium'>get in touch</p>
                        <ul className='flex flex-col gap-2 text-gray-600'>
                            <li>+ 91 7709266280</li>
                            <li>amolkadam1274@gmail.com</li>
                        </ul>
                    </div>
                </div>


                {/* copywrite text  */}
                <div>
                    <hr />

                    <p className='py-5 text-sm text-center'>Copyright 2024 @ amolkadam.dev - All Right Reserved.</p>

                </div>

            </div>
        </>
    )
}

export default Footer
