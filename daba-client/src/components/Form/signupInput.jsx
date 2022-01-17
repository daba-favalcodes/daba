import React from "react";
import { Form, Col, Row } from "react-bootstrap";

const Input = ({
    label,
    classname,
    type,
    name,
    value,
    placeholder,
    onChange,
    as
}) => {
    return (
        <div>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail"> 
                    <Form.Control
                        className={classname}
                        type={type}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        size="lg"
                        as={as}
                    />

            </Form.Group>
        </div>
    );
};

export default Input;
