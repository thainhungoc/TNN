import React from 'react'
import { Button, Form } from 'react-bootstrap'

const FormTodo = () => {
  return (
    <Form className="d-flex">
    <Form.Control
      type="text"
      placeholder="todo somthing ...."
      className="me-2"
    />
    <Button type="submit" variant="outline-info">Thêm</Button>
  </Form>
  )
}

export default FormTodo