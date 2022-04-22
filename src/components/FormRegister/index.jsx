import { FormRegisterStyled } from './styles'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'

const FormRegister = () =>{

    return(
        <FormRegisterStyled>
            <h2>Crie sua conta</h2>
            <p>Rapido e gratis, vamos nessa</p>
            <Input children={'Nome'} placeholder={'Digite aqui seu nome'}/>
            <Input children={'Email'} placeholder={'Digite aqui seu email'}/>
            <Input children={'Senha'} placeholder={'Digite aqui sua senha'}/>
            <Input children={'Confirmar senha'} placeholder={'Digite aqui sua confirmação'}/>
            <Select option1={'Primeiro Módulo'} 
                    option2={'Segundo Módulo'} 
                    option3={'Terceiro Módulo'}
                    label={'Selecionar Módulo'}/>
            <Button children={'Cadastrar'} background={'#59323F'}/>
        </FormRegisterStyled>

    )



}
export default FormRegister

////titulo a esquerda e button voltar a direita
// INPUTS => NOME EMAIL SENHA  CONFIRMAR SENHA       SELECT => SELECIONAR MODULO
//BUTTON => CADASTRAR