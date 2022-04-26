import { FormRegisterStyled } from './styles'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../services/Api'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { Link, Redirect } from 'react-router-dom/cjs/react-router-dom.min'

const FormRegister = ({ authenticated }) =>{

    const schema = yup.object().shape({
        name: yup.string().required('Campo obrigatório!'),
        email: yup.string().email('Email invalido').required('Campo obrigatório!'),
        password: yup
        .string()
        .min( 6, 'Minimo de 6 digitos')
        .required('Campo obrigatório!'),
        confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas precisam ser iguais')
        .required('Campo obrigatório!'),
        course_module: yup.string()
    })

    const history = useHistory()

    const {
        register, 
        handleSubmit, 
        formState: { errors },
    }= useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = ( data ) =>{
        data.bio = 'lorem Ipsum'
        data.contact = 'lorem Ipsum'
        const { bio, name, password, email, contact, course_module} = data
        const user = {
            bio, name, password, email, contact, course_module
        }
        api.post('/users', user)
        .then((_)=>{
            toast.success('Usuario Cadastrado')})
            history.push('/')
        .catch((_)=>toast.error('Usuario não cadastrado'))

    }
    console.log(errors)


    if(authenticated === true){
        return < Redirect to='/home'/>
    }

    return(
        <FormRegisterStyled onSubmit={ handleSubmit( onSubmit ) }>
            <h2>Crie sua conta</h2>
            <p>Rapido e gratis, vamos nessa</p>
            <Input 
            children={'Nome'} 
            placeholder={'Digite aqui seu nome'} 
            register={register}
            name={'name'}
            error={errors.name?.message}/>
            <Input 
            children={'Email'}
            placeholder={'Digite aqui seu email'} 
            register={register}
            name={'email'}
            error={errors.email?.message}/>
            <Input 
            children={'Senha'} 
            placeholder={'Digite aqui sua senha'} 
            register={register}
            name={'password'}
            error={errors.password?.message}/>
            <Input 
            children={'Confirmar senha'} 
            placeholder={'Digite aqui sua confirmação'} 
            register={register}
            name={'confirmPassword'}    
            error={errors.confirmPassword?.message}/>
    
            <Select 
            register={register}
            option1={'Primeiro Módulo'} 
            option2={'Segundo Módulo'} 
            option3={'Terceiro Módulo'}
            option4={'Quarto Módulo'}
            label={'Selecionar Módulo'}/>
            <Button 
            type={'submit'}
            children={'Cadastrar'} 
            background={'#59323F'}/>
        </FormRegisterStyled>

    )



}
export default FormRegister

////titulo a esquerda e button voltar a direita
// INPUTS => NOME EMAIL SENHA  CONFIRMAR SENHA       SELECT => SELECIONAR MODULO
//BUTTON => CADASTRAR