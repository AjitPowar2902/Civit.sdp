import React from 'react'
import {Link } from "react-router-dom";
export default function LinkButton({label,hrf,onClick,classname,icon}) {
  return (
    <>
       <Link title={label} onClick={onClick} to={hrf} className={classname} data-bs-toggle="tooltip" data-bs-placement="top">
        {label}&nbsp;{icon}
      </Link>
    </>
  )
}
