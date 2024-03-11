import React from 'react'
import '../../css/step1.css'
export default function step1({ data }) {
  return (
    <>
      <div className="col-xl-12 bg-dark pt-5 pb-5" >
        <div className="col-11 col-sm-10 col-md-7 col-lg-8 col-xl-6 col-xxl-6  mx-auto">
          <div className="mx-auto step-div1 col-xl-12 text-center"><span className='step-text fw-bold'>{data.Step1_span}</span></div>
          <div className="mx-auto col-xl-12 text-center mt-4"><h1 className='step_h1'>{data.Step1_h1_1}</h1></div>
          <div className="mx-auto col-xl-12 text-center"><h4 className='step-h4'>{data.Step1_h4_1}</h4></div>
          <div className='d-flex justify-content-center'>
            <button className='step2_btn1 rounded p-3 mt-4' >{data.Step1_btn_1}</button>
          </div>
        </div>
      </div>



    </>
  )
}
