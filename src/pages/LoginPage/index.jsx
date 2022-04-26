import { LoginPageStyled } from "./styles"
import FormLogin from "../../components/FormLogin"
import Logo from "../../components/Logo"

const LoginPage = ({ authenticated, setAuthenticated }) =>{

    return(
        <LoginPageStyled>
            <div>
                <Logo/>
                <FormLogin authenticated={ authenticated } setAuthenticated={setAuthenticated} />
            </div>
        </LoginPageStyled>
    )

}
export default LoginPage