import React from 'react'
import "../../api/data"
export default function expert_Agree({data}) {
  return (
    <>
    <section className='bg-dark pt-4 pb-4'>
        <div className="col-xl-12 text-center" ><h1 className='step_h1'>{data.expert_agree_h1_1}</h1></div>
        <div className="col-xl-12 mt-4"><img className='img-fluid' src={data.image} alt="" /></div>
    </section>
    </>
  )
}
