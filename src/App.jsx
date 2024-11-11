import { useState } from "react";
import { CardPrinciapl } from "./components/CardPrincial"
import { Header } from "./components/Header"
import { Search } from "./components/Search"
import { useEffect } from "react";


function App() {
  const [datos, setDatos] = useState({})
  const [errores, setErrores] = useState(null)
  const isDark = document.documentElement.classList.contains('dark');


  async function obtenerData(user) {
    try {
      const response = await fetch(`https://api.github.com/users/${user}`)

      if (!response.ok) {
        
        setErrores("usuario no encontrado")
        return
      }
      const data = await response.json()
      setDatos(data)
      setErrores(null)

    } catch (error) {
      setErrores("usuario no encontrado")
      
    }


  }

  useEffect(() => {
    obtenerData('LuisPerez2008');
  }, []);



  return (
    <div className=" font-principal bg-[#F6F8FF] dark:bg-fondo transition-colors">
      <div className=" h-[100vh] flex flex-col justify-center max-w-[100%] mx-auto tablet:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[40%]   ">
        <header>
          <Header isDark={isDark} />
        </header>

        <main>
          <Search obtenerData={obtenerData} error={errores} />
          <CardPrinciapl datos={datos} />
        </main>
      </div>
    </div>
  )
}

export default App
