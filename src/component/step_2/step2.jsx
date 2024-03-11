import React from 'react'
import "../../css/step2.css"
export default function step2({ data }) {
  return (
    <>
      <div className="col-xl-12 bg-dark p-5 ">
        <div className="col-11 col-sm-10 col-md-7 col-lg-8 col-xl-6 col-xxl-6 mx-auto">
          <div className="mx-auto step-div1 col-xl-12 text-center ">
            <span className='step-text fw-bold '>{data.Step2_span}</span>
          </div>
          <div className="mx-auto col-xl-12 text-center mt-3">
            <h1 className='step_h1'>{data.Step2_h1_1}</h1>
          </div>
          <div className="mx-auto col-xl-12 text-center">
            <h4 className='step-h4'>{data.Step_h4_1}</h4>
          </div>
        </div>
      </div>
    </>
  )
}
