import React from 'react'
import { Link } from 'react-router-dom'

const WidgetTags = () => {

  const tags = ['c','c++','javascript','python','java','html','react','node','react','sql','php','mongoDB','mern','express','css']

  return (
    <div className='widget-tags'>
      <h3>Watched Tags</h3>
      <div className='widget-tags-div'>
        {
          tags.map((tag) => (
            <Link to='/tags'><p key={tag}>{tag}</p></Link>
          ))
        }
      </div>
      </div>
  )
}

export default WidgetTags
