import React from 'react'
import { Button } from 'react-bootstrap'
import "../../styles/Global.scss";
export default function PrimaryButton({onClick,label}) {
  return (
      <button className='button-Primary rounded-1 mr-15 btn-4' onClick={onClick} style={{padding:'5px 40px 5px 40px'}}>{label}</button>
  )
}
