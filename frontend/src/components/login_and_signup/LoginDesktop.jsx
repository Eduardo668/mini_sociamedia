import { useEffect } from 'react';
import './css/Login.css'

const LoginDesktop = ()=>{

  

  return (
      <>
        <div className='body' >

              <div className='login_container'>
                  <div className='box1'>
                     <img className='logo' src="./css/img/logo.png" alt="" />
                     <h1 className='title title_font'>Login</h1>
                  </div>
                  <div className='box2'>
                     <div className='input_name_group form-floating'>
                          <label className='label_name' htmlFor="usernameInput">Username</label>
                          <input className='input_name' type="text" id='usernameInput' />
                     </div>
                     <div className='input_pass_group'>

                     </div>
                  </div>
                  <div className='box3'>
                     
                  </div>
        
              </div>
              
              <div className='img_login'></div>
        </div>
      </>
  )

}

export default LoginDesktop;