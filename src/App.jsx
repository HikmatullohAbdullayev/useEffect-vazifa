import Header from "./header/header"
import Main from "./main/main"


import { useState, useEffect } from 'react'
import { BASE_URL } from "./constants/constants"


function App() {
  
 
  return (
    <>
    <Header/>
    <body className="bg-slate-400">
      
    <Main/>
    </body>
    
    </>
  )
}

export default App
