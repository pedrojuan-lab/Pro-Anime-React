import { useState } from "react"
import Home from "./pages/Home"
import Start from "./pages/Start"
import ThemeButton from "./components/ThemeButton"
import "./css/style.css"

export default function App() {

  const [tema, setTema] = useState("dark")

  const [pagina, setPagina] = useState("start")

  return (
    <>
      <div className={tema}>
      <ThemeButton tema={tema} setTema={setTema} />

      {pagina === "start" && <Start entrar={() => setPagina("home")} />} 
      {pagina === "home" && <Home />}
      
     </div>
    </>
  )
}