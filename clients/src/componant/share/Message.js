

import React from "react";
import { Alert } from "react-bootstrap";

const Message = ({ variant, children }) => {
  return <Alert variant={variant} className="text-center text-danger">{children}</Alert>;
};

export default Message;
