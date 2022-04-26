import { Route, Switch } from "react-router-dom"
import RegisterPage from "../pages/RegisterPage"
import LoginPage from "../pages/LoginPage"
import HomePage from "../pages/Home"
import { useState } from "react"
import { useEffect } from "react"

const Routes = () =>{

    const [ authenticated, setAuthenticated ] = useState(false)

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('@KenzieHub:token'))

        if(token){
             setAuthenticated(true)
        }

    },[authenticated])
    return(
        <Switch>
            <Route exact path={ '/' }>
                <LoginPage 
                authenticated={authenticated} 
                setAuthenticated={ setAuthenticated }      
                />
              
            </Route>
            <Route exact path={ '/register' }>
                <RegisterPage authenticated={authenticated} />
            </Route>
            <Route exact path={'/home'}>
                <HomePage setAuthenticated={setAuthenticated} authenticated={authenticated} />
            </Route>
        </Switch>
    )
}

export default Routes