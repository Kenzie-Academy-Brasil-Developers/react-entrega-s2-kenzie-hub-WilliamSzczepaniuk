import { Container } from "./styles";

const Select = ({ option1, option2, option3, label }) =>{

    return (
        <Container>
            <label>{label}</label>
            <select>
                <option>{option1}</option>
                <option>{option2}</option>
                <option>{option3}</option>
            </select>
        </Container>

    )
}
export default Select