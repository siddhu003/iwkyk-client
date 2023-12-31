import React from 'react'
// import { useSelector } from 'react-redux'

export const ProfileBio = ({ currentProfile }) => {

    // const users = useSelector((state) => state.usersReducer)

  return (
      <div className='tags-bio'>
          <div>
              {
              currentProfile?.tags.length !==0 ? (
                  <>
                      <h4>Tags Watched</h4>
                      {
                          currentProfile?.tags.map((tag) => (
                              <p key={tag}>{tag}</p>
                          ))
                      }
                  </>
              ) : (
                      <p>0 tags watched</p>
            )
          }
          </div>
          
          <div>
              {
                  currentProfile?.about ? (
                      <>
                          <h4>About</h4>
                          <p>{currentProfile?.about}</p>
                      </>
                  ) : (
                        <p>No bio found</p>
                  )
              }
          </div>
          
    </div>
  )
}

//export default ProfileBio