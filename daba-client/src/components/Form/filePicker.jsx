import React from 'react'
import { Form } from 'react-bootstrap'

const FilePicker = ({ label, name, classname, onChange}) => {
    return (
        <div>
            <Form.Group>
                <Form.Control type="file" className={classname} label={label} name={name} onChange={onChange} />
            </Form.Group>
        </div>
    )
}

export default FilePicker
