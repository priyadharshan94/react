import React, { useState}from 'react'


function Calculator() {
  const [num1,setNum1]=useState("")
  const [num2,setNum2]=useState("")

  const a=Number(num1);
  const b=Number(num2);
  return (
    <div>
      <h1 style={{TextDecoration:"underline"}}>Calculator</h1>
      <input type="number" placeholder='enter the first value'
      onChange={(e)=>setNum1(e.target.value)}/>
      <input type="number" placeholder='enter the second value'
      onChange={(e)=>setNum2(e.target.value)}/>
      <div style={{height:"200px",
        width:"200px",
        border:"1px solid",
        marginLeft:"570px",
        marginTop:"20px",
        backgroundColor:"lightblue"}}>
          <h3>result:</h3>
        <p><strong>addition</strong>{a+b}</p>
        <p><strong>subtraction</strong>{a-b}</p>
        <p><strong>multiplication</strong>{a*b}</p>
        <p><strong>division</strong>{b==0 ?"|cant divided by 0":a/b}</p>
      </div>
    </div>
  )
}

export default Calculator