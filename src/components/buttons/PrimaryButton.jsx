import React from 'react'
import { Button } from 'react-bootstrap'
import "../../styles/global.scss";
export default function PrimaryButton({onClick,label,onSubmit}) {
  return (
      <button type='submit'  className='button-Primary rounded-1 mr-15 btn-4 hide-on-print'  onSubmit={onSubmit}  onClick={onClick} style={{padding:'5px 40px 5px 40px'}}>{label}</button>
  )
}
