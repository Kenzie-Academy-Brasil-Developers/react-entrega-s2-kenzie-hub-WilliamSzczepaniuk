import { LoginPageStyled } from "./styles"
import FormLogin from "../../components/FormLogin"
import Logo from "../../components/Logo"

const LoginPage = () =>{

    return(
        <LoginPageStyled>
            <div>
                <Logo/>
                <FormLogin/>
            </div>
        </LoginPageStyled>
    )

}
export default LoginPage