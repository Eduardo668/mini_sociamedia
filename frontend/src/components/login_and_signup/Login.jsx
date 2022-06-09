import { useState } from 'react';
import { useEffect } from 'react';
import './css/Login.css'
import LoginDesktop from './LoginDesktop';
import LoginMobile from './LoginMobile';
const Login = ()=>{
  
  const [verifyChange, setVerifyChange] = useState(false);

  const changeLayoutPage = ()=>{
      
      let screenSize = window.screen.width
      if (screenSize <= 650){
        setVerifyChange(true)
      }
      else{
        setVerifyChange(false)
      }

     
  }

  useEffect(()=>{
      changeLayoutPage();
  }, [])

  return (
      <>
      
      {
        !verifyChange ? <LoginDesktop/> : <LoginMobile/>
      }
       
      </>
  )

}

export default Login;