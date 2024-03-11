import React from 'react'
import '../../css/footer.css'
export default function footer({data}) {
  return (
    <div className='col-xl-12 bg-dark pt-5 pb-5 footerdiv1 d-flex justify-content-center align-items-center'>
        <div className='col-xl-8'>
        <div className='d-flex justify-content-center'>
        <img className='logo' src={data.logo} alt="" />
      </div>
      <div className='d-flex justify-content-center'>
        <h2 className='footerh1'>{data.footerh1}</h2>
      </div>
      <div className='d-flex justify-content-center'>
        <p className='footerh1'>{data.footerp1}</p>
      </div>
      <div className='gap-3 d-flex justify-content-center'>
            <button type="button" class="btn btn-primary">{data.footerbtn1}</button>
          </div>
          <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center'>
            <div className='col-xl-4 col-lg-12 col-md-12 col-12 d-flex justify-content-center'>
              <img className='mainimg1 mt-2' src={data.dot} alt="" />
              <div className='d-flex'>
                <p className='mt-1 ms-2 p4'>{data.p4}</p>
                <p className='mt-1 ms-2 p5'>{data.p5}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
