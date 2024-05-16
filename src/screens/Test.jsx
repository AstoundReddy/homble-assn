import React, { useState } from "react";
import { Toast, Button } from "react-bootstrap";

function Test() {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  return (
    <>
      <Button onClick={toggleShow}>Toggle Toast</Button>
      <Toast show={show} onClose={toggleShow}>
        <Toast.Header>
          <strong className="mr-auto">Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>See? Just like this.</Toast.Body>
      </Toast>
    </>
  );
}

export default Test;
