import { ButtonStyled } from "./styles"


const Button = ({children, background, ...rest}) =>{

    return(
        <ButtonStyled background={ background } type='button' {...rest}>
            {children}
        </ButtonStyled>


    )

}
export default Button