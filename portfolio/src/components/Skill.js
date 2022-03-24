import React from 'react'

const Skill = (props) => {
  return (
    <div className='skill'>
        <div className='skillImg'>
            {props.sign}
        </div>
        <span className='skillTitle'>{props.title} <br /> <span className='levelSign'>{props.level}</span> </span>
    </div>
  )
}

export default Skill