import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
//import { useDispatch } from 'react-redux'
import Avatar from '../../components/Avatar/Avatar'
import decode from 'jwt-decode'
//import logo from '../../assets/Screenshot from 2023-01-08 16-48-23.png'
// import logo from '../../assets/Stack_Overflow_logo1.png'
// import logo from '../../assets/iwkyk-new.png'
import logo from '../../assets/IWKYK-removebg-preview(1).png'
// import logoSmall from '../../assets/ion-removebg-preview.png'
import search from '../../assets/search.svg'
import './navbar.css'
import { setCurrentUser } from '../../actions/currentUser'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import ReactSwitch from 'react-switch'
import sun from '../../assets/sun-solid.svg'
import moon from '../../assets/moon.svg'

//let Logo = require('../../assets/logo.png');
//<img src={require('../../assets/logo.png')} alt="React Logo"/>


/* <Link to="/" className='nav-item nav-btn'>About</Link>
         <Link to="/Subscribe" className='nav-item nav-btn'>Products</Link>
         <Link to="/" className='nav-item nav-btn'>For Teams</Link>
         <form>
           <input type="text" placeholder='Search' />
           <img style={{width:18,height:25}} src={search} alt="Search" className='search-icon'/>
         </form> */
/* <div className="switch">

      {/* <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label> 
      
    <label>{theme === "light" ? <img src={sun} alt='sun' width='25px' /> : <img src={moon} alt='moon' width='30px' style={{color:'white'}} />}</label>
    <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
</div> */

const Navbar = ({toggleTheme,theme}) => {
  //var User=null
  const navigate = useNavigate()
  const dispatch = useDispatch()
  var User = useSelector((state) => (state.currentUserReducer))

  
  useEffect(() => {

    const token = User?.token

    if (token)
    {
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 < new Date().getTime())
      {
        handleLogout()
      }
    }
      
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    //eslint-disable-next-line
  }, [dispatch])
  
  //<Link to={`/Users/${User?.result?._id}`} style={{ textDecoration: 'none' }}><Avatar backgroundColor="#009dff" px="12px" py="8px" borderRadius="50%" color="white" >{ User?.result?.name.charAt(0).toUpperCase() }</Avatar></Link>

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
    dispatch(setCurrentUser(null))
  }
  
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  //const size = window.innerWidth;

    return(
    <nav className='main-nav'>
      <div className='navbar'>
        
          
          {
            windowSize.current[0] >= 500 ? 
              <>
              <Link to='/' className='nav-item nav-logo'>
                < img src={logo} alt='logo' className='main-logo' style={{height:"40px"}}/>
              </Link>
              <Link to="/" className='nav-item nav-btn'>About</Link>
              <Link to="/Subscribe" className='nav-item nav-btn'>Products</Link>
              <Link to="/" className='nav-item nav-btn'>For Teams</Link>
              <form>
                <input type="text" placeholder='Search' />
                <img style={{width:18,height:25}} src={search} alt="Search" className='search-icon'/>
                </form>
                
                { User === null ?
                  <Link to='/Auth' className='nav-item nav-links'>Log In</Link> :
                    <>
                      <Link to={`/Users/${User?.result?._id}`} style={{ textDecoration: 'none' }}><Avatar backgroundColor="#57A773" px="12px" py="8px" borderRadius="50%" color="#D5FFD0" >{ User.result.name.charAt(0).toUpperCase() }</Avatar></Link>
                      <button className='nav-btn nav-links' onClick={handleLogout}>Log Out</button>
                    </>  
                }
                {/* <button className='nav-btn nav-links' onClick={handleLogout}>Log Out</button> */}

                <div className="switch">
                  {/* <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label> */}
                  
                <label>{theme === "light" ? <img src={sun} alt='sun' width='25px' /> : <img src={moon} alt='moon' width='30px' style={{color:'white'}} />}</label>
                <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
                </div>
              </> : 
              <>
                <Link to='/' className='nav-item nav-logo'>
                  < img src={logo} alt='logo' className='main-logo' style={{width:'60px', height:'30px'}}/>
                  {/* < img src={logoSmall} alt='logo' className='main-logo' style={{ height:'35px'}}/>  */}
                </Link>
                <NavLink to='/' activeClassName='nav-item nav-btn' className='nav-item nav-btn'>Home</NavLink>
                <NavLink to='/Questions' activeClassName='nav-item nav-btn' className='nav-item nav-btn'>Questions</NavLink>
                <NavLink to='/Tags' activeClassName='nav-item nav-btn' className='nav-item nav-btn'>Tags</NavLink>
                <NavLink to='/Users' activeClassName='nav-item nav-btn' className='nav-item nav-btn'>Users</NavLink>

                { User === null ?
                  <Link to='/Auth' className='nav-item nav-links'>Log In</Link> :
                    <>
                      <Link to={`/Users/${User?.result?._id}`} style={{ textDecoration: 'none', fontSize:'11px'}}><Avatar backgroundColor="#57A773" px="7px" py="2.5px" borderRadius="50%" color="#D5FFD0">{ User.result.name.charAt(0).toUpperCase() }</Avatar></Link>
                      <button className='nav-btn nav-links' onClick={handleLogout}>Log Out</button>
                    </>  
                }

                <div className="switch">
                  {/* <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label> */}
                  <label>{theme === "light" ? <img src={sun} alt='sun' width='20px' /> : <img src={moon} alt='moon' width='20px' style={{color:'white'}} />}</label>
                  <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
                </div>
              </>
          }
          {/* <ReactSwitch/> */}

          
          
        </div>

        
        
        
    </nav>
  )
}

export default Navbar;
