import { HeaderContainer } from "./styles"
import logo from "../../assets/teste1.png"


export function Header (){
    return (

        <HeaderContainer>
       <div className="container"> 
         <img src={logo} alt="" />
        </div>
        </HeaderContainer>
    )
}