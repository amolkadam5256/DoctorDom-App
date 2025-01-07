import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityManu = () => {
    return (
        <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-gray-800'>
            <h1 className='text-3xl font-medium'>
                Find by Speciality
            </h1>
            <p className='text-sm text-center sm:w-1/2'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum labore et velit distinctio perspiciatis aut nisi praesentium vero adipisci! Ipsam ex quam corrupti consectetur? Esse vitae eveniet deleniti accusamus optio?
            </p>
            <div className='flex w-full gap-4 pt-5 overflow-scroll sm:justify-center'>
                {specialityData.map((item, index) => (
                    <Link 
                        onClick={() => scrollTo(0, 0)} 
                        className='flex flex-col items-center flex-shrink-0 text-xs transition-all duration-500 cursor-pointer hover:translate-y-2' 
                        key={index} 
                        to={`/doctors/${item.speciality}`}>
                        <img className='w-16 mb-2 sm:w-24' src={item.image} alt={`${item.speciality} icon`} />
                        <p>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SpecialityManu;
