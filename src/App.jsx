
import './App.css'
import Header from './component/Header/Header'
import FooterSection from './component/Footer/Footer'
import AllRoutes from './Routes/AllRoutes'
import UserContext from './contex/user'
import { useState } from 'react'
function App() {

  // Here you can add your user data

  const [userData, setUserData] = useState({username:"", email: "", usertype: "", id: ""})


  return (
      <>  
        <UserContext.Provider value={{userData, setUserData}}>
          <Header />
          <AllRoutes />
          <FooterSection />
        </UserContext.Provider>
      </>
  )
}

export default App
