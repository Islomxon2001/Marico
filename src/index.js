import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// 
import { navbar } from './api/data';
import { main } from './api/data';
import { step1 } from './api/data';
import { home_page } from './api/data';
import { step2_page } from './api/data';
import { one_link } from './api/data';
import { step3 } from './api/data';
import { home_page2 } from './api/data';
import { expert_agree } from './api/data';
import { audience } from './api/data';
import { footer } from './api/data';
// 
 import Navbar from './commons/navbar';
 import Main from './component/container/main'
 import Step1 from './component/step_1/step1';
 import Your_homepage from './component/your_homepage/your_homepage';
 import Step2 from './component/step_2/step2';
 import One_link from './component/one_link_collects/one_link';
 import Step3 from './component/step_3/step3';
 import Your_homepage2 from './component/your_homepage2/your_homepage2';
 import Expert_Agree from './component/Expert Agree/expert_Agree';
 import Audience from './component/Audience/Audience';
 import Footer from './component/container/footer';
// 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Navbar data={navbar}/>
<Main data={main}/> 
<Step1 data={step1}/>
<Your_homepage data={home_page}/>
<Step2 data={step2_page}/> 
<One_link data={one_link }/> 
<Step3 data={step3}/>
<Your_homepage2 data={home_page2}/>
<Expert_Agree data={expert_agree}/> 
<Audience data={audience}/>
<Footer data={footer}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
