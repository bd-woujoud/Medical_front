import React from 'react'
import SideBar from './SideBar'
import about from'../images/about.png'
function Home() {
  return (
    <div>
      <SideBar />
      <div id="content">
                <div class='main' >
                    <div class='container'>
      
    
        <h1 style={{fontSize:"50px",fontFamily:"fantasy",color:"#1ED085" ,marginTop:"100px",textAlign:"center"}}>Chez Nous Vous Pouvez</h1>
        <img src={about} alt="" style={{ height: '100%', width:"100%", justifyItems:"center"}} />
      </div>
</div>
    </div>
    </div>
  )
}

export default Home