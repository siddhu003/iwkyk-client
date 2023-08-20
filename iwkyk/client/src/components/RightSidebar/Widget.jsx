import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/message.svg'
import pen from '../../assets/pen.svg'
import blackLogo from '../../assets/stack-overflow-small.svg'

const Widget = () => {
  return (
    <div className='widget'>
      <div className="widget-1">
      <h4>The Overflow Blog</h4>
      <div className='right-side-bar-div-1'>
        <div className='right-side-bar-div-2'>
        <img src={pen} alt='pen' width='18' />
          <p>Observability is key to the future of software (and your DevOps career)</p>
        </div>
        <div className='right-side-bar-div-2'>
        <img src={pen} alt='pen' width='18' />
          <p>Podcast 374: How valuable is your screen name and type ?</p>
        </div>
        </div>
      </div>
      
      <div className="widget-1">
      <h4>Featured on Meta</h4>
      <div className='right-side-bar-div-1'>
        <div className='right-side-bar-div-2'>
        <img src={comment} alt='pen' width='18' />
          <p>Review queue workflows-Final release, work in progress ...</p>
        </div>
        <div className='right-side-bar-div-2'>
          <img src={comment} alt='pen' width='18' />
          <p>Please welcome Valued Associates: #958- V2Blast #959 -SpencerG</p>
        </div>
        <div className='right-side-bar-div-2'>
          <img src={blackLogo} alt='pen' width='18' />
          <p>Outdated Answers: accepted answer is now unpinned on Stack Overflow</p>
        </div>
        </div>
        </div>

      <div className="widget-1">
      <h4>How Meta Posts</h4>
      <div className='right-side-bar-div-1'>
        <div className='right-side-bar-div-2'>
          <p>38</p>
          <p>Why was this spam flag declined, yet the question marked as spam?</p>
        </div>
        <div className='right-side-bar-div-2'>
          <p>20</p>
          <p>What is the best course of action when a user has high rep to...</p>
        </div>
        <div className='right-side-bar-div-2'>
          <p>14</p>
          <p>Is a link to the "How to ask" help page a useful comment</p>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Widget
