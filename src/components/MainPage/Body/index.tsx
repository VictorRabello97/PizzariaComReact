import { BodyContainer } from "./styles"
import React from "react"
import { useState, useEffect } from "react"
import {motion} from "framer-motion"
import ban1 from "../../../assets/rotativo1.jpg"
import ban2 from "../../../assets/rotativo2.jpg"
import ban3 from "../../../assets/rotativo3.jpg"
import ban4 from "../../../assets/rotativo4.jpg"
import ban5 from "../../../assets/rotativo5.jpg"
import ban6 from "../../../assets/rotativo6.jpg"
import banner from "../../../assets/banner3.png"


const images = [ban1, ban2, ban3, ban4, ban5, ban6]


export function Body (){

    const carousel = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const [widht, setWidth]: any = useState();

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    console.log(`okok ${widht}`)

    return (

        <BodyContainer>
        
            <h1>Mais Vendidas</h1>

        <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>

            <motion.div className="inner"
            drag="x" //X = HORIZONTAL // Y = VERTICAL
            dragConstraints={{right: widht, left: -widht}}
            >
                {images.map(image => (
                    <motion.div className="item" key={image}> 
                        <img src={image} />
                    </motion.div>
                ))}

            </motion.div>

        </motion.div>

            <div className="bannerContainer">
                 <img src={banner} alt="" />
            </div>
        
        </BodyContainer>

        
        
                
    )
}