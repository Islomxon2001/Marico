import React from 'react'
import "../../css/one_link.css"
export default function one_link({data}) {
  return (
    <>
    <section className='col-xl-12 pb-5 bg-dark'>
        <div  className="col-xl-12 d-flex justify-content-center gap-5  flex-wrap">
        <div className="one_link-div1 col-10 col-sm-10 col-md-10 col-lg-5  col-xl-5 col-xxl-5  ps-3">
            <div><span className='text-success'>{data. one_link_span}</span></div>
            <div className='mt-3'><h1 className='text-secondary'>{data.one_link_h1_1}</h1></div>
            <div><h2 className='text-white'>{data.one_link_h2_1}</h2></div>
            <div className='mobile-foto col-xl-12 img-fluid'><img className='img-fluid col-11 col-sm-8 col-md-6 col-lg-8 col-xl-8 foto-div' src={data.mobilefoto} alt="" /></div>
        </div>
        <div className="col-10 col-sm-10 col-md-10 col-lg-5  col-xl-5 col-xxl-5  one_link-div1 ps-3">
            <div><span className="text-success">{data.one_link_subscribers}</span></div>
            <div className='text-secondary mt-5 fw-bold'><h1>{data.one_link_h1_2}</h1>
            <h1>{data.one_link_h1_3}</h1>
          
            </div>
            <div className='text-white fw-bold'>  <h1>{data.one_link_h1_4}</h1></div>
        </div>
      </div>  
      <div className='d-flex col-xl-12 justify-content-center mt-4 '> 
      <button className='rounded one_link_btn pt-2 pb-2 ps-5 pe-5'>{data.one_link_button_1}</button></div>
    </section>
    
    
    </>
  )
}
