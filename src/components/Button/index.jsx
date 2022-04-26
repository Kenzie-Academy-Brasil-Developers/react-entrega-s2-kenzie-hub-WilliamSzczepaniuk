import { ButtonStyled } from "./styles"


const Button = ({children, background, onClick, ...rest}) =>{

    return(
        <ButtonStyled onClick={onclick} background={ background } type='button' {...rest}>
            {children}
        </ButtonStyled>


    )

}
export default Button