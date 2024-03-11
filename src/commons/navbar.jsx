import React from 'react'
import "../css/navbar.css"
import NavbarDarkExample from './drodown'
export default function navbar({ data }) {
  return (
    <div>
      <div className='  navbar1 bg-dark fixed-top d-flex align-items-center justify-content-center col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
        <div className="  d-none d-sm-none d-md-flex d-lg-flex d-xl-flex align-items-center justify-content-between  col-xl-11 col-lg-11 col-md-11 col-sm-11 col-11">
          <div className='logo d-flex align-items-center'>
            <img src={data.company} alt="" />

          </div>
          <div>
            <ul className='navbar-ul d-flex gap-3 align-items-center'>
              <li>
                <NavbarDarkExample data={data} />
              </li>
              <li>{data.about}</li>
              <li className='pri'>{data.pricing}</li>
              <li>{data.blog}</li>
            </ul>
          </div>
          <div>
            <ul className='navbar-ul d-flex gap-3 align-items-center'>
              <li>{data.login}</li>
              <li><button className='sign-up'>
                {data.sign}</button>
              </li>
            </ul>
          </div>
        </div>
        <div className=' col-md-11 col-sm-11 col-11 d-flex d-sm-flex d-md-none d-lg-none d-xl-none align-items-center justify-content-between'>
          <div className='logo d-flex align-items-center'>
            <img className='company' src={data.company} alt="" />
          </div>
          <button onClick={add} className='bars'>
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      <div id='offcanvas' className=' col-sm-12 col-12 d-md-none d-lg-none d-xl-none fixed-top top-0  justify-content-end'>
        <div className="on col-sm-5 col-6  d-flex bg-dark flex-column ">
          <div className='xmark pe-3  col-sm-12 col-12 d-flex align-items-center justify-content-end'>
            <button className='btn-xmark' id="xmark" onClick={add1}> <i class="fa-solid fa-xmark"></i>
            </button> </div>
          <div className='col-sm-12 col-12 '>
            <ul className='navbar-ul pt-3 d-flex flex-column gap-3'>
              <li>{data.about}</li>
              <li className='pri'>{data.pricing}</li>
              <li>{data.blog}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
function add() {
  let off = document.getElementById('offcanvas');
  off.style.display = "flex"
}
function add1() {
  let off = document.getElementById('offcanvas');
  off.style.display = "none"
}