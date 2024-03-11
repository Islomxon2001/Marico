import React from 'react'
import "../../css/main.css"
function Main({ data }) {
  return (
    <div className="main w-100 bg-dark">
      <div className='d-flex justify-content-center'>
        <div className='w-100 maindiv1 '>
          <div className='col-xl-12 col-lg-12 col-md-12 d-flex justify-content-center mainp1'><p>{data.p1}</p></div>
          <div className='col-xl-12 col-lg-12 col-md-12 bg-danger d-flex justify-content-center mainp2'><p>{data.p2}</p></div>
        </div>
      </div>
      <div className='col-xl-12 d-flex justify-content-center mt-3'>
        <div className='col-xl-12 text-center mt-5'>
          <div className='col-xl-12 d-flex justify-content-center'>
            <div className='col-xl-3 col-lg-7 col-md-8 col-9 '>
              <p className='mainp3'>{data.p3}</p>
            </div>
          </div>
          <div className='gap-3 d-flex justify-content-center mt-4'>
            <button type="button" class="btn btn-primary">{data.btn1}</button>
            <button type="button" class="btn btn-outline-secondary">{data.btn2}</button>
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
      <div className='w-100 mt-5'>
        <div className='col-xl-12 d-flex justify-content-center'>
          <h3 className='mainh1'>{data.mainh1}</h3>
        </div>
        <div className='col-xl-12 flex-wrap d-flex mt-4'>
          <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
            <div className='col-xl-12 d-flex justify-content-center'>
              <p className='p10'>{data.p6}</p>
            </div>
            <div className='col-xl-12 d-flex justify-content-center'>
              <p className='p7'>{data.p7}</p>
            </div>
          </div>
          <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
            <div className='col-xl-12 d-flex justify-content-center'>
              <p className='p10'>{data.p8}</p>
            </div>
            <div className='col-xl-12 d-flex justify-content-center'>
              <p className='p7'>{data.p9}</p>
            </div>
          </div>
          <div className='col-xl-4 col-lg-4 col-md-6 col-12'>
            <div className='col-xl-12 d-flex justify-content-center'>
              <p className='p10'>{data.p10}</p>
            </div>
            <div className='col-xl-12 d-flex justify-content-center'>
              <p className='p7'>{data.p11}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;




