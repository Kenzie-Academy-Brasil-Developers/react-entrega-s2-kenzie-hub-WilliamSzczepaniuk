import { Container } from './styles'
const Input = ({ children, placeholder, register, name, error})=>{

    return(
        <Container>
            <div>
                <label>{children}</label>
                {!!error && <span> - {error}</span>}
            </div>       
            <input {...register(name)} placeholder={placeholder}/>
        </Container>

    )


}
export default Input