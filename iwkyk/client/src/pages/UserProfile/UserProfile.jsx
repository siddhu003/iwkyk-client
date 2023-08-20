import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Avatar from '../../components/Avatar/Avatar'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import cake from '../../assets/birthday-cake.svg'
import pen from '../../assets/pen.svg'
import moment from 'moment'
import { useState } from 'react'
import { EditProfileForm } from './EditProfileForm'
import { ProfileBio } from './ProfileBio'
import { useRef } from 'react'
import './UsersProfile.css'
import { useDispatch } from 'react-redux'
import { updateFollow, updateUnFollow } from '../../actions/users'
import { useNavigate } from 'react-router-dom'
import Following from './Following'
// import PersonAddSharpIcon from '@mui/icons-material/PersonAddSharp';
// import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
// import { sizeWidth, width } from '@mui/system'

const UserProfile = () => {

    const { id } = useParams()
    const users = useSelector((state) => state.usersReducer)
    const currentProfile = users.filter((user) => user._id === id)[0]
    const currentUser = useSelector((state) => state.currentUserReducer)
    //console.log(currentProfile)
    // console.log(currentUser)

    const followIndex = currentUser?.result.follow.findIndex((id) => id === String(currentProfile._id))

    const dispatch = useDispatch()
    const Navigate = useNavigate()

    const [Switch, setSwitch] = useState(false)
    const [Follow, setFollow] = useState(false)
    const [Follower, setFollower] = useState(false)

    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    const followList = () => {
        // eslint-disable-next-line
        Follow = setFollow(!Follow);
    }

    const followerList = () => {
        // eslint-disable-next-line
        Follower = setFollower(!Follower);
    }

    const handleFollow = () => {
        if(currentUser === null)
        {
            alert('Login or Signup to follow someone')
            Navigate('/Auth')
        }
        
        // dispatch(updateFollow(currentUser?.result?._id, { followId: currentProfile.result._id, followName: currentProfile.result.name }))
        dispatch(updateFollow(currentUser.result._id, currentProfile?._id))
    }

    const handleUnFollow = () => {
        if(currentUser === null)
        {
            alert('Login or Signup to unfollow someone')
            Navigate('/Auth')
        }
        dispatch(updateUnFollow(currentUser.result._id, currentProfile?._id))
    }

    return (
      <div className='home-container-1'>
          {
              windowSize.current[0] >= 500 ? 
                  <>
                      <LeftSidebar />
                  </> :
                  <>
                      
                  </>
          }
          
          <div className="home-container-2">
              <section>
                  <div className="user-details-conatiner">
                      <div className='user-details'>
                          {
                            windowSize.current[0] >= 500 ? 
                                <>
                                    <Avatar backgroundColor='purple' color='white' fontSize='50px' px='40px' py='25px'>
                                        {currentProfile?.name.charAt(0).toUpperCase()}
                                      </Avatar>
                                      
                                    <div className="user-name">
                                        <h1>{currentProfile.name}</h1>
                                        <p><img src={cake} alt='cake' width='18px' />  Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
                                    </div>
                                </> :
                                <>
                                    <Avatar backgroundColor='#7231EC' color='white' fontSize='30px' px='25px' py='15px'>
                                        {currentProfile?.name.charAt(0).toUpperCase()}
                                    </Avatar>
                                      
                                    <div className="user-name">
                                        <h1>{currentProfile.name}</h1>
                                        <p><img src={cake} alt='cake' width='12px' />  Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
                                    </div>
                                </>
                          }
                          
                      </div>

                      {
                        windowSize.current[0] >= 500 ? 
                            <>
                                {
                                    currentUser?.result._id === id && (
                                        <button type='button' onClick={() => setSwitch(true)} className='edit-profile-btn'>
                                            <img src={pen} alt='pen' width='18px' />Edit Profile
                                          </button>
                                          
                                    )
                                }
                              </> :
                            <>
                                {
                                    currentUser?.result._id === id && (
                                        <button type='button' onClick={() => setSwitch(true)} className='edit-profile-btn'>
                                            <img src={pen} alt='pen' width='12px' />Edit Profile
                                        </button>
                                    )
                                }
                            </>
                      }
                      



                      {
                        windowSize.current[0] >= 500 ? 
                            <>
                                {
                                    currentUser?.result._id !== id && (
                                            
                                            <>
                                                {/* {
                                                    currentUser?.result.follow.map((fid) => (
                                                        <>
                                                            {
                                                                fid == currentProfile._id && (
                                                                    <>
                                                                        <button type='button' onClick={() => handleUnFollow()} className='edit-follow-btn'>
                                                                            UnFollow
                                                                        </button>
                                                                    </>
                                                                    
                                                                )
                                                            }
                                                            </>
                                                    ))
                                                } */}

                                                {
                                                    followIndex !== -1 ? (
                                                        <>
                                                            <button type='button' onClick={() => handleUnFollow()} className='edit-follow-btn'>
                                                                            UnFollow
                                                                        </button>
                                                            </>
                                                    ) : (
                                                            <>
                                                                <button type='button' onClick={() => handleFollow()} className='edit-follow-btn'>
                                                                    Follow
                                                                </button>
                                                                </>
                                                    )
                                                }


                                            {/* <button type='button' onClick={() => handleFollow()} className='edit-follow-btn'>
                                                Follow
                                            </button> */}
                                            {/* // <img onClick={() => handleFollow()} src={PersonAddOutlinedIcon} /> */}
                                        </>
                                    )
                                }
                                </> :
                                
                            <>
                                {
                                    currentUser?.result._id !== id && (
                                        <button type='button' onClick={() => handleFollow()} className='edit-follow-btn'>
                                            Follow
                                          </button>
                                            // <img onClick={() => handleFollow()} src={PersonAddOutlinedIcon} />
                                    )
                                }
                            </>
                      }
                      
                      {/* <>
                          <p>{currentUser.result.follow.length}</p>
                      </> */}

                  </div>

                  <div className='following'>
                      {
                        //   current?.result._id === id && (
                            currentProfile?._id === id && (
                              
                              <>
                                    <h4>Following</h4>
                                    
                                    {/* <p onClick={followList}>{currentUser.result.follow.length} following</p> */}
                                    <p onClick={followList}>{currentProfile.follow.length} following</p>
                                    <div className="user-list-container-1">
                                  {
                                        Follow && currentProfile.follow.map((follow) => (
                                          <>
                                            
                                              {/* <p>{follow.followName}</p>
                                              <p>{follow.followId}</p> */}
                                                <Following userId={follow} />
                                                    
                                                
                                                {/* <User user={follow} key={follow}/> */}
                                    </>
                              ))
                                  }
                                        </div>
                              </>
                          )
                      }
                    </div>

                    <div className="followers">
                        {
                            currentUser?.result._id === id && (
                              
                              <>
                                    <h4>Followers</h4>
                                    <p onClick={followerList}>{currentUser.result.followers.length} followers</p>
                                    <div className="user-list-container-1">
                                    {
                                        
                                        Follower && currentUser.result.followers.map((follower) => (
                                            <>
                                                
                                                    <Following userId={follower} />
                                                    
                                    </>
                                    ))
                                    
                                  }
                                        </div>
                              </>)
                        }
                    </div>
                  
                  <>
                      {
                          Switch ? (
                              <EditProfileForm currentUser={currentUser} setSwitch={setSwitch} />
                          ) : (
                                <ProfileBio currentProfile={currentProfile} />
                          )
                      }
                  </>
              </section>
          </div>
      </div> 
  )
}

export default UserProfile
