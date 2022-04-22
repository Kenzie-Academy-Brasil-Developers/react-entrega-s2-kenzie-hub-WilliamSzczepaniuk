import {FormLoginStyled} from "./styles"
import Button from "../Button"
import Input from "../Input"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom/cjs/react-router-dom.min"



const FormLogin = () =>{

    return(
        <FormLoginStyled>
            <h3>Login</h3>
            <Input  children={'Email'} placeholder='Digite aqui seu email'/>
            <Input  children={'Senha'} placeholder='Digite aqui sua senha'/>
            <Button background={'#FF577F'} children={'Entrar'}></Button>
            <p>Ainda não possui uma conta?</p>
            <Button background={'#868E96'} ><Link to={'/register'} >Cadastre-se</Link></Button>
        </FormLoginStyled>
    )


}
export default FormLogin

//form com um titulo central LOGIN
// 2 inputs um mpara email e outro para senha cada um com uma descricao a cima 
//button ENTRAR
//paragrafo ainda nao possui uma conta?
//button cadastre-se