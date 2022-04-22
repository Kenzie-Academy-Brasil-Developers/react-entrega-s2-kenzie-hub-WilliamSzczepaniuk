import { Container } from './styles'
const Input = ({ children, placeholder})=>{

    return(
        <Container>
            <label>{children}</label>
            <input placeholder={placeholder}/>
        </Container>

    )


}
export default Input