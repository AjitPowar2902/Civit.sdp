import React from 'react'
import {Badge} from 'react-bootstrap';

export default function Badges({label,background}) {
  return (
    <Badge bg={background} style={{width:"80%"}}>{label}</Badge>
  )
}
