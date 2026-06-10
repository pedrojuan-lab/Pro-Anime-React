export default function ThemeButton({ tema, setTema }) {
  return (
    <button
      className="tema-btn"
      onClick={() =>
        setTema(tema === "dark" ? "light" : "dark")
      }
    >
      {tema === "dark" ? "☀️ Claro" : "🌙 Escuro"}
    </button>
  )
}
