import React from 'react'
import styled from 'styled-components'

const MyStyleComponent = () => {
    const H4 = styled.h4 `
        color:blue;
        background-color:yellow
    `
    const Button = styled.button `
        color:pink;
        font-size:20px;
    `
  return (
    <div>
      <h3>My style</h3>
      <H4>Hello</H4>
      <Button>Click</Button>
    </div>
  )
}

export default MyStyleComponent
