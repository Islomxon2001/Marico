import React from 'react'
import "../../css/Audience.css"
import "../../api/data"
export default function Audience({data}) {
  return (
    <>
    <section className='bg-dark pb-5'>
        <div className='Audience_bg bg-dark img-fluid d-flex justify-content-center align-items-center text-white'>
          <h1 className=' text-center'>{data.Audience_h1_1}</h1>
          </div>
    </section>
    </>
  )
}
