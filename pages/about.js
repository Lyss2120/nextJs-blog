import React from 'react'

const about = () => {
  return (
    <div>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quod delectus aliquid illo alias. Voluptatem id fuga, illo deleniti amet omnis est harum porro doloribus quod numquam rerum quasi consectetur.</p>
        <button onClick={()=>{alert('Hi you are in About page')}}>click!</button>
    </div>
  )
}

export default about