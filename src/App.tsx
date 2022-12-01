import { Body } from "./components/Body"
import { MainBar } from "./components/Main Bar"
import { Logo } from "./components/Logo"
import { GlobalStyle} from "./global"
import { Maps } from "./components/GoogleMaps"
import { Footer } from "./components/Footer"

function App() {

  return (
      <div className="wrapper">
      <GlobalStyle />
      <Logo/>
      <MainBar/>
      <Body/>
      <Maps/>
      <Footer/>
      </div>

    
    )
}

export default App
