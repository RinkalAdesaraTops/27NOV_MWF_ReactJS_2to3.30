import React from 'react'
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
const Contact = () => {
  return (
    <div>
      <h3>My Contact Page</h3>
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
            Button as link
        </Button>
        <Button as="a" variant="success">
            Button as link
        </Button>
        </Stack>;
    </div>
  )
}

export default Contact
