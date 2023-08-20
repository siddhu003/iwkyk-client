import React from 'react'
import { Link } from 'react-router-dom'
import './Users.css'

const User = ({ user }) => {

    //var name = user.name
    // console.log(name)
    return (
        // <Link to={`/Users/${user._id}`} className='user-profile-link'>
        
        <Link to={`/Users/${user._id}`} className='full-div'>
            <div className="user-profile-link">
                <h3>{user._id.charAt(0).toUpperCase()}</h3>
                {/* <h3>{name}</h3> */}
                <h5>{user.name}</h5>
            </div>
            {
                user.about === " " | user.about === "" | user.about === null ?  
                    <>
                        <p>No bio found</p>
                    </> :
                    <>
                        <p>{user.about}</p>
                    </>
            }
            
            {
                user?.tags.map((tag) => (
                    <p key={tag}>{tag}</p>
                ))
            }
        </Link>
            
  )
}

export default User
