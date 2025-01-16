import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'


const MyAppointments = () => {

  const { doctors } = useContext(AppContext)

  return (
    <>
      <div>
        <p>My appointments</p>
        <div>
          {doctors.slice(0, 2).map((item, index) => (
            <div key={index}>
              <div>
                <img src={item.image} alt="" />
              </div>
              <div>
                <p>{item.name}</p>
                <p>{item.speciality}</p>
                <p>Address:</p>
                <p>{item.address.line1}</p>
                <p>{item.address.line2}</p>
                <p><span>Date & Time:</span> 25, july, 2024 | 8:30 PM</p>
              </div>

              <div></div>
              <div>time 04;10;47</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MyAppointments
