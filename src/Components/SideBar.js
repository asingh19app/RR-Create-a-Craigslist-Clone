import React from 'react'

export default function SideBar(props) {
  return (
    <>    
     <div> {props.message}</div>
     <div>{props.pet}</div>
    </>

  )
}
