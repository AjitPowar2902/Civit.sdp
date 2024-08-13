import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function Tooltips({ title, children, placement }) {
console.log(children);
  return (
    <>
      <OverlayTrigger
        key={placement}
        placement={placement}
        overlay={<Tooltip>{title}</Tooltip>}
      >
        {children}
      </OverlayTrigger>
    </>
  );
}
