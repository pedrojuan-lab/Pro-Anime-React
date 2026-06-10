import { useState } from "react"

export default function Card({ nome, img }) {
  const [nota, setNota] = useState(0)

  return (
    <div className="card">
      <img src={img} />
      <h3>{nome}</h3>
  

    <div className="avaliação">
     <p>Nota: {nota}⭐</p>
      <button onClick={() => setNota(1)}>⭐</button>
      <button onClick={() => setNota(2)}>⭐</button>
      <button onClick={() => setNota(3)}>⭐</button>
      <button onClick={() => setNota(4)}>⭐</button>
      <button onClick={() => setNota(5)}>⭐</button>
    </div>

    </div>
  

  )
}