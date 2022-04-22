import { Container } from './styles'
import Logo from '../../components/Logo'
import FormRegister from '../../components/FormRegister'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'


const RegisterPage = ()=>{

    const schema = yup.object().shape({
        name: yup.string().required('Campo obrigatório!'),
        email: yup.string().email('Email invalido').required('Campo obrigatório!'),
        password: yup.string().required('Campo obrigatório!'),
        confirmPassword: yup.string().required('Campo obrigatório!'),
    })

    const {
        register, 
        handleSubmit, 
        formState: { errors },
    }= useForm({
        resolver: yupResolver(schema)
    })

    return(
        <Container>
            <div>
                <nav>
                    <Logo/>
                    <button className='button-voltar'><Link to={'/'}>Voltar</Link></button>
                </nav>
                <FormRegister/>
            </div>
        </Container>


    )
}

export default RegisterPage