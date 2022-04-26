import { Container } from "./styles"
const Card = ({ status, title, setIdTech, id, setNameTech, setAppearModalEdit }) =>{



    return(
        <Container 
        onClick={ () => {
            setAppearModalEdit(true)
            setIdTech(id)
            setNameTech(title)
        }}>
            <h2>{title}</h2>
            <p>{status}</p>

        </Container>

        
        
    )


}
export default Card