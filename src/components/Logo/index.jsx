import { LogoStyled } from "../Logo/styles"
const Logo = () =>{
    const imgLogo = require('../../Images/Logo.png')
    return(
        <LogoStyled  src={imgLogo} alt="" />
    )

}
export default Logo