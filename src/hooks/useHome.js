import { useState, useEffect } from "react"

function useHome() {
  const [isDark, setIsDark] = useState("dark")

  // switchMode function
  function onChangeMode() {
    if (isDark != "dark") {
      setIsDark("dark")
      document.body.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      setIsDark("light")
      document.body.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  useEffect(() => {
    let theme = localStorage.getItem("theme")

    theme == null
      ? document.body.classList.add("dark")
      : document.body.classList.add(theme)

    setIsDark(theme == null ? "dark" : theme)
  }, [])

  return { isDark, onChangeMode }
}

export default useHome
