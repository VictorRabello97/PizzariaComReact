import { Body } from "./components/MainPage/Body"
import { MainBar } from "./components/MainPage/Main Bar"
import { Logo } from "./components/MainPage/Logo"
import { GlobalStyle} from "./global"
import { Maps } from "./components/MainPage/GoogleMaps"
import { Footer } from "./components/MainPage/Footer"

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
