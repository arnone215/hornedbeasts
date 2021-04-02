import React from "react"
import { Form } from "react-bootstrap";
// import SelectedBeast from "./SelectedBeast"
class DropdownSelection extends React.Component {

  render() {
    return (
      <Form onChange={(e) => alert(e.target.value)}>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label >Number of Horns</Form.Label>
          <Form.Control as="select">
            <option>One</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
      </Form>
    )
  }
  
  
}

export default DropdownSelection;