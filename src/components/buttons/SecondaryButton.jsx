import React from 'react'
import { Button } from 'react-bootstrap'
import "../../styles/Global.scss";
export default function SecondaryButton({onClick,label}) {
  return (
   <>
   <button type="submit" className='rounded-1 button-Secondary mr-15 btn-4' style={{padding:'5px 40px 5px 40px'}} onClick={onClick}>{label}</button>
   </>
  )
}
