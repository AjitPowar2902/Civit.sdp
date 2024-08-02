import React from 'react'
import {Badge} from 'react-bootstrap';

export default function Badges({label,background,textcolor}) {
  return (
    <Badge pill bg={background} text={textcolor} style={{width:"80%"}}>{label}</Badge>
  )
}
