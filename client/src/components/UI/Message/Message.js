import React from 'react'
import {Alert} from 'react-bootstrap'

export default function errorMessage({variant,children}) {
    return (
        <Alert variant = {variant}>{children}</Alert>
    )
}
