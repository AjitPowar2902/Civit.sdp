import React from 'react'
import { Button } from 'react-bootstrap'
import "../../styles/global.scss";
export default function SecondaryButton({onClick,label,onSubmit,className}) {
  return (
   <>
   <button type="submit"
    onSubmit={onSubmit}
     onClick={onClick} 
     className={`rounded-1 button-Secondary mr-15 btn-4 hide-on-print ${className}`}
      style={{padding:'5px 40px 5px 40px'}} >
        {label}
        </button>
   </>
  )
}
