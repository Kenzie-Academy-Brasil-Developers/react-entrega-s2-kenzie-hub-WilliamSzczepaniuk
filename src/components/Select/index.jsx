import { Container } from "./styles";

const Select = ({ option1, option2, option3, option4, label, register }) =>{
    const value = option1
    return (
        <Container>
            <label>{label}</label>
            <select {...register("course_module")} >
                <option value={"Primeiro módulo (Introdução ao Frontend)"}>{option1}</option>
                <option value={"Segundo módulo (Frontend Avançado)"}>{option2}</option>
                <option value={"Terceiro módulo (Introdução ao Backend)"}>{option3}</option>
                <option value={"Quarto módulo (Backend Avançado)"}>{option4}</option>
            </select>
        </Container>

    )
}
export default Select