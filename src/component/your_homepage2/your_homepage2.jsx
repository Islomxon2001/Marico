import React from 'react'
import "../../css/home_page2.css"
import "../../api/data"


export default function your_homepage2({ data }) {
  return (
    <>
      <section className='col-xxl-12 d-flex flex-wrap bg-dark  text-white pb-3'>
        {/* home page text */}
        <div className="text  col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
          <div className="col-xl-8 mx-auto mt-4  col-lg-9 col-xxl-8 col-md-12 col-sm-12 col-12 d-flex flex-column align-items-center justify-content-center">
            <div className='text-div1 col-xl-12 mx-auto'>
              <span>{data.home_page2_span_1}</span>
            </div>
            <div className="text-div2 mx-auto col-xl-12 mt-3">
              <h2>{data.home_page2_h2_1}</h2>
            </div>
            <div className="text-div3 mt-2 mx-auto col-xl-12 d-flex gap-3">
              <h2>{data.home_page2_h2_2}</h2>
              <h2 className='text-div3-h2'>{data.home_page_h2_3}</h2>
            </div>
            <div className="content-div mt-3 col-xl-12">
              <div className='d-flex text-white gap-2'>  <div className='bullet text-center'><span className='fs-6'>{data.home_page2_span_2}</span></div><p>{data.home_page2_p_1}</p></div>
              <div className='d-flex text-white gap-2'>  <div className='bullet text-center'><span className='fs-6'>{data.home_page2_span_3}</span></div><p>{data.home_page2_p_2}</p></div>
            </div>
            <div className='content-button-div gap-3 d-flex mt-3 col-xl-12'>
              <button type="button" class="content-btn2 btn btn-md rounded">{data.home_page2_btn_1}</button>
              <button type="button" class="text-secondary content-btn btn  btn-md rounded">{data.home_page2_btn_2}</button>
            </div>
          </div>
        </div>
        {/* screen player */}
        <div className="screen  col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mt-4 col-xxl-6 p-1">
          <iframe src="https://open.spotify.com/embed/artist/41MozSoPIsD1dJM0CLPjZF?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>


      </section>
    </>
  )
}
