import React from 'react'

const Contact = () => {
    let count =0;
    for(let i=0;i<1000000;i++){
        return count += i;
    }
  return (
    <div>
      <h3>My Contact Page</h3>
      <h4>Counter is : {count}</h4>
    </div>
  )
}

export default Contact
