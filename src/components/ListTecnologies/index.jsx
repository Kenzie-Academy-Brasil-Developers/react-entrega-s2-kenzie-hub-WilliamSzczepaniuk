import { Container } from "./style"
import Card from  '../Card'
const ListTecnologies = ({ userTechs, setIdTech, setNameTech, setAppearModalEdit }) =>{

    return(
        <Container>
            {userTechs.map(( tech )=>(
                <Card 
                setAppearModalEdit={setAppearModalEdit}
                setNameTech={setNameTech}
                setIdTech={setIdTech}
                id={tech.id}
                key={ tech.id } 
                status={ tech.status } 
                title={ tech.title }/>
            ))}
        </Container>
    )
}
export default ListTecnologies