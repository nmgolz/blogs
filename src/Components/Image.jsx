import React from 'react'

function Image() {

    const images = {avatar: 'https://placekitten.com/g/200/200'}
  return (
    <div> 
        <img
            key={images.avatar}
            src={images.avatar || null}
        />
    </div>
  )
}

export default Image