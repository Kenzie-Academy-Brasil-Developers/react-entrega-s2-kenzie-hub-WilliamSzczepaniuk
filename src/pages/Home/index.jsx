import { Redirect } from "react-router-dom"
import { Container } from "./styles"
import Logo from "../../components/Logo"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Modal from "../../components/Modal"
import ListTecnologies from "../../components/ListTecnologies"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useEffect } from "react";
import api from "../../services/Api";
import ModalEdit from "../../components/ModalEdit";
import { useHistory } from "react-router-dom";
const HomePage = ({ authenticated, setAuthenticated }) =>{
    
    const history = useHistory()
    
    const [ userTechs, setUserTechs ] = useState([])
    const [ appearModal, setAppearModal ] = useState(false)
    const [ idTech, setIdTech ] = useState('')
    const [ nameTech, setNameTech ] = useState('')
    const [ apperModalEdit, setAppearModalEdit ] = useState(false)

    
    const user = JSON.parse(localStorage.getItem('@KenzieHub:user'))

    const schema = yup.object().shape({
        
    })
    const exit =()=>{
        history.push('/')
     //   <Redirect to={'/'}/>
     setAuthenticated(false)
        localStorage.clear()
      
       
    }

    const { 
        register, 
        handleSubmit
    } = useForm({
        resolver: yupResolver(schema)
    })

    useEffect(()=>{
        api.get(`/users/${user.id}`)
        .then((response)=>{
            setUserTechs(response.data.techs)
        })
    },)
    
    if(!authenticated){
        return <Redirect to={'/'}/>
    }

    const data = JSON.parse(localStorage.getItem('@KenzieHub:user'))
    const { name, course_module } = data

    return(
        <Container>
            <div className="Container_Home">
                {appearModal && 
                <Modal 
                register={register} 
                handleSubmit={handleSubmit}
                setAppearModal={setAppearModal} />}
                {apperModalEdit &&
                <ModalEdit  
                setAppearModalEdit={setAppearModalEdit}
                nameTech={nameTech} 
                idTech={idTech}
                register={register}
                handleSubmit={handleSubmit}/>}
                <nav>
                    <Logo/>
                    <button 
                    onClick={()=>exit()}
                    className="button_sair">Sair</button>
                </nav>
                <section>
                    <h2>Olá, {name}</h2>
                    <p>{course_module}</p>
                </section>
                <div className="container_Add_techs">
                    <h3>Tecnologias</h3>
                    <button className="button_add" onClick={()=>setAppearModal(true)}>+</button>
                </div>
                <div className="container_techs">
                    <ListTecnologies
                    setAppearModalEdit={setAppearModalEdit}
                    setNameTech={setNameTech}
                    setIdTech={setIdTech}
                    userTechs={userTechs}/>
                </div>
            </div>
        </Container>



    )

}
export default HomePage