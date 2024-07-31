import React from 'react'
import { Button } from 'react-bootstrap'

export default function SecondaryButton({onClick,label}) {
  return (
   <>
   
   <Button variant='outline-dark' className='pr-4 pl-4 rounded-1' onClick={onClick}>{label}</Button>
   </>
  )
}
