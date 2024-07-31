import React from 'react'
import { Button } from 'react-bootstrap'

export default function PrimaryButton({onClick,label}) {
  return (
    <div>
      <Button variant='dark' className='pr-4 pl-4 rounded-1' onClick={onClick}>{label}</Button>
    </div>
  )
}
