import React from 'react'

export default function Box(props){
    const styles = {
        backgroundColor: props.on ? "#7074c2" : "transparent"
    }


  return (
    <div
    style={styles}
    className='box'
    onClick={()=>props.toggle(props.id)}
    >
        <p>❤️❤️❤️</p>
    </div>
  )
}
