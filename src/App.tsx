import { Body } from "./components/Body"
import { SideBar } from "./components/Side Bar"
import { Header } from "./components/Header"
import { GlobalStyle} from "./global"
import { Maps } from "./components/GoogleMaps"

function App() {

  return (
      <div className="wrapper">
      <GlobalStyle />
      <Header/>
      <SideBar/>
      <Body/>
      <Maps/>
      </div>

    
    )
}

export default App
