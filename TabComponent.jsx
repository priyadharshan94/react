import React, { useState } from 'react'

function TabComponent() {
    const [activeTab,setActiveTab]=useState("home")
  return (
    <div style={Styles.container}>
        <h1>hi! tab content</h1>
        <button onClick={()=>setActiveTab("Home")}>Home</button>
        <button onClick={()=>setActiveTab("About")}>About</button>
        <button onClick={()=>setActiveTab("Contact")}>Contact</button>
        <div style={Styles.tabcontainer}>
            

        </div>
        <div style={Styles.ContentBox}>
            {activeTab=== "Home" && <p>Home</p>}
            {activeTab=== "About" && <p>Kgcas</p>}
            {activeTab=== "Contact" && <p>computer science</p>}

        </div>
    </div>
  )
}
const Styles={
    container:{
        minHeight:"50vh",
        padding:"20px",
        border:"1px solid",

        
    },
    tabcontainer:{
        padding:"20px",
        border:"none",
        margin:"20px"
    },
    ContentBox:{
        height:"100px",
        width:"300px",
        marginleft:"100px",
        background:"lightblue",
        paddingtop:"10px"
    }
}


export default TabComponent