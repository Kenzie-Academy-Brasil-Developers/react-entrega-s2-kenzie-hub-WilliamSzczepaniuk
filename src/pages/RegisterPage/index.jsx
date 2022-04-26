import { Container } from './styles'
import Logo from '../../components/Logo'
import FormRegister from '../../components/FormRegister'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const RegisterPage = ({authenticated})=>{
    return(
        <Container>
            <div>
                <nav>
                    <Logo/>
                    <button className='button-voltar'><Link to={'/'}>Voltar</Link></button>
                </nav>
                <FormRegister authenticated={ authenticated }/>
            </div>
        </Container>


    )
}

export default RegisterPage