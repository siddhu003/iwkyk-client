import React, {useState} from 'react'
import './Auth.css'
// import icon from '../../assets/icon3.png'
import icon1 from '../../assets/IWKYK-crop-icon-removebg-preview.png'
import icon2 from '../../assets/ion-removebg-preview.png'
import AboutAuth from './AboutAuth'
import { signup, login } from '../../actions/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import { useRef } from 'react'
// import { logIn } from '../../api'

const Auth = ({toggleTheme,theme}) => {

  const [isSignup, setIsSignup] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
 
  const handleSwitch = () => {
    setIsSignup(!isSignup)
  } 

  // function useGetData() {
  //   const { isLoading, data, error, isSuccess, isError } = useQuery("login", logIn);

  //   return { isLoading, data, error, isSuccess, isError };
  // }

  //const { isLoading, message} = useGetData();

  const handleSubmit = (e) => {
    e.preventDefault()  
    

    if (!email && !password)
    {
      alert("Please enter email and password to continue")
    }

    if (isSignup)
    {
      if (!name)
      {
        alert("Please enter a name to continue")
      }
      dispatch(signup({name,email,password}, navigate))
    }
    else
    {
      dispatch(login({ email, password }, navigate))  
      
    //   console.log("isLoading : ", isLoading);
    //   console.log("data : ", message);
    }
    
    //console.log({name,email,password})
  }


  // function useGetData() {
  //   const { isLoading, data, error, isSuccess, isError } = useQuery("login", logIn);

  //   return { isLoading, data, error, isSuccess, isError };
  // }


  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  // const { isLoading, data, error, isSuccess, isError } = useGetData();
  // console.log("isLoading : ", isLoading);
  // console.log("data : ", data);

  return (
    
  
    <section className='auth-section'>
      {
        windowSize.current[0] >= 500 ?
          <>
            { isSignup && <AboutAuth/> }
          </> :
          <>
          </>
      }
      
      <div className='auth-container-2'>
        {/* {
          theme === "dark" ?
              !isSignup && <img src={icon2} alt='stack overflow' className='login-logo1' />
            :
              // !isSignup && <img src={icon2} alt='stack overflow' className='login-logo2' />
            <></>
        }

        {
          theme === "light" ?
              !isSignup && <img src={icon1} alt='stack overflow' className='login-logo1' />
            :
              // !isSignup && <img src={icon2} alt='stack overflow' className='login-logo2' />
            <></>
        } */}

        {theme === "light" && !isSignup && <img src={icon1} alt='stack overflow' className='login-logo' />}
        {theme === "dark" && !isSignup && <img src={icon2} alt='stack overflow' className='login-logo1' />}
        <form onSubmit={handleSubmit}>
          {
            isSignup && (
              <label htmlFor='name'>
                <h4>Display name</h4>
                <input type='text' name='name' id='name' onChange={(e) => {setName(e.target.value)}} />
              </label>
            )
          }

          <label htmlFor='email'>
            <h4>Email</h4>
            <input type='email' name='email' id='email' onChange={(e) => { setEmail(e.target.value) }} />
          </label>
          <label htmlFor='password'>
            <div style={{ display: 'flex', justifyContent:'space-between'}}>
              <h4>Password</h4>
              {/* {!isSignup &&<Link to='/forgot-password'> <p style={{ color:'#007ac6', fontSize:'13px', textDecoration:'none'}}>Forgot password?</p></Link>} */}
            </div>
            <input type='password' name='password' id='password' onChange={(e) => { setPassword(e.target.value) }}  />
            {isSignup && <p style={{fontSize:'13px'}}>Passwords must contain at least eight characters,<br/> including at least 1 letter and 1 number. </p>}
          </label>

          {isSignup && (
            <label htmlFor='check'>
              <input type='checkbox' name='check' id='check' />
              <p style={{ fontSize:'13px'}}>Opt-in to receive occasional product<br/> updates, user research invitations,<br/> company announcements, and digests.</p>
            </label>
          ) }

          <button type='submit' className='auth-btn'>{isSignup ? 'Sign Up' : 'Log In'}</button>
          {
            isSignup && (
              <p style={{color:'#666767', fontSize:'13px'}}>By clicking “Sign up”, you agree to our
                <span style={{color:'#007ac6'}}>terms of<br /> service</span>,
                <span style={{color:'#007ac6'}}>privacy policy </span>and
                <span style={{color:'#007ac6'}}>cookie policy</span></p>
          )  }
        </form>
        
        <p className='auth-p'>
          {isSignup ? 'Already have an account' : "Don't have an account"}
          <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{ isSignup ? 'Log In' : 'Sign Up'}</button>
        </p>
      </div>
      {
        windowSize.current[0] >= 500 ?
          <>
          </> :
          <>
            {isSignup && <h1 className='auth-p'>Join the IWKYK community</h1>}
          </>
      }
      
    </section>
  )
}

export default Auth
