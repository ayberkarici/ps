import React from 'react'

const Footer = (props) => {
  return (
    <div className={props.currLocation == '/' ? 'footer ' : 'footer footerBgDark '}><span>{"</> by Ayberk Arıcı"}</span></div>
  )
}

export default Footer