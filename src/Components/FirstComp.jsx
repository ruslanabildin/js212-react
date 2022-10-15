import React from 'react'
import './style.css'
export default function FirstComp({post}) {
  return (
    <div className='post'>
      <h2>Заголовок {post.id} : {post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}
