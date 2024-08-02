
import './App.css'
import Header from './component/Header/Header'
import FooterSection from './component/Footer/Footer'
import AllRoutes from './Routes/AllRoutes'
import UserContext from './contex/user'
import { useState } from 'react'
import InputSearch from './contex/searchtext'
function App() {

  // Here you can add your user data

  const [userData, setUserData] = useState({username:"", email: "", usertype: "", id: "",})
  const [inputData, setInputData] = useState("")


  return (
      <>  
        <UserContext.Provider value={{userData, setUserData}}>
          <InputSearch.Provider value={{inputData, setInputData}}>
          <Header />
          <AllRoutes />
          <FooterSection />
          </InputSearch.Provider>
        </UserContext.Provider>
      </>
  )
}

export default App
