import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SwitchTransition } from "react-transition-group"
import Users from "./components/Users"
import { AuthContext } from "./context"
import NoMatch from "./NoMatch"


const App = () => {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path="/users" element={<Users />}>
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>

  )
}


export default App
