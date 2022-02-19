import React from 'react'

const Skill = (props) => {
  return (
    <div className='skill'>
        <div className='skillImg'>
            {props.sign}
        </div>
        <span className='skillTitle'>{props.title}</span>
    </div>
  )
}

export default Skill