import React from 'react'
import Button from 'react-bootstrap/Button'

export default function PrimaryButton({label}) {
  return (
    <div>
      <Button className='pr-4 pl-4 rounded-1' type='submit'>{label}</Button>
    </div>
  )
}
