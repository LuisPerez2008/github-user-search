import { CardPrinciapl } from "./components/CardPrincial"
import { Header } from "./components/Header"
import { Search } from "./components/Search"



function App() {

  return (
    <div className="bg-fondo font-principal">
      <div className=" h-[100vh] flex flex-col justify-center max-w-[100%] mx-auto tablet:max-w-[40%] ">
        <header>
          <Header/>
        </header>
        
        <main>
          <Search/>
          <CardPrinciapl/>
        </main>
      </div>
    </div>
  )
}

export default App
