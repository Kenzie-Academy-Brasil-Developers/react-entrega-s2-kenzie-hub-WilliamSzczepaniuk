import { Route, Switch } from "react-router-dom"
import RegisterPage from "../pages/RegisterPage"
import LoginPage from "../pages/LoginPage"


const Routes = () =>{

    return(
        <Switch>
            <Route exact path={ '/' }>
                <LoginPage/>
            </Route>
            <Route exact path={ '/register' }>
                <RegisterPage/>
            </Route>
        </Switch>
    )
}

export default Routes