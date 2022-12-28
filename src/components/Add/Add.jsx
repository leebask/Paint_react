import { Button } from 'antd'
import React, { useState } from 'react'

function Add() {
    const [add,setAdd]= useState({
        a:0,
        b:0
    })
  return (
    <div>Add
        <Button onClick= {()=>setAdd({...add,a:add.a+1})}>Add1</Button>
        <div>{add.a}</div>
        <Button onClick= {()=>setAdd({...add,b:add.b+1})}>Add2</Button>
        <div>{add.b}</div>
    </div>
  )
}

export default Add