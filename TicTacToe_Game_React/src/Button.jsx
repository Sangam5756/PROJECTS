import { useState } from "react";

export default function Button({count, action}){

 
  return (
    <>
      <button onClick={action}>Click To Increase {count}</button>
    </>
  )

}