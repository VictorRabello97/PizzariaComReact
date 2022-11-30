import { HeaderContainer } from "./styles"
import logo from "../../assets/logo.png"


export function Logo (){
    return (

        <HeaderContainer>
       <div className="container"> 
         <img src={logo} alt="" />
        </div>
        </HeaderContainer>
    )
}