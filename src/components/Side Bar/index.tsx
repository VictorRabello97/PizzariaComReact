import { HeaderContainer } from "./styles"
import { Martini, Pizza, Hamburger, Star } from "phosphor-react"

export function SideBar(){
    return (

        <HeaderContainer>


                <div className="mainContainer">
            
                <p> <Pizza className="backgroundicons" size={40} /> Pizzas</p>
                <p ><Hamburger className="backgroundicons" size={40}/> Hamburger</p>
                <p ><Martini className="backgroundicons" size={40} /> Bebidas </p>
                <p><Star className="backgroundicons" size={40} /> Favoritos </p>
                </div>
            

        </HeaderContainer>

    )}