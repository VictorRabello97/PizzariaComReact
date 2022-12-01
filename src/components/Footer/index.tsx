import { FooterContainer, SecondContainer } from "./styles"
import {LinkedinLogo, GithubLogo, WhatsappLogo, Copyright} from "phosphor-react"

export function Footer(){
    return (

        <FooterContainer>
            <footer>
                <div className="container">
                    <p className="icons"> <WhatsappLogo size={32} weight="thin" /> 11 99433-0698</p>
                    <p className="icons"> <GithubLogo size={32} weight="thin" /> github.com/VictorRabello97 </p>
                    <p className="icons"><LinkedinLogo size={32} weight="thin" /> www.linkedin.com/in/victor-rabello-94aa0b164</p>
                </div>

                

            </footer>
                
                <SecondContainer>
                <div className="secondContainer">
                    <p className="icons"><Copyright size={20} weight="thin" />CopyRight Victor Rabello</p>
                </div>
                </SecondContainer>

        </FooterContainer>
    )
}