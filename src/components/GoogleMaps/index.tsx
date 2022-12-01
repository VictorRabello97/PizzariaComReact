import { MapContainer } from "./styles"
import ban1 from "../../assets/nossoEspaço1.jpg"
import ban2 from "../../assets/nossoEspaço2.jpg"

export function Maps(){
    return (
        
        <MapContainer> 
            <h1>Conheça o nosso Espaço</h1>

            <div className="nossoEspaço">
                <img src={ban1} alt="" />
                <img src={ban2} alt="" />
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7314.865028768689!2d-46.680707965112305!3d-23.552904800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce578f59db7a0f%3A0x2e9d08a2bd5ea3f2!2sR.%20Oscar%20Freire%2C%202250%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005409-011!5e0!3m2!1spt-BR!2sbr!4v1669761941729!5m2!1spt-BR!2sbr" width="100%" height="450" loading="lazy" ></iframe>
        </MapContainer>
    )
}