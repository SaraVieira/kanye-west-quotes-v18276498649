import React, { useEffect, useState } from "react"
import "./styles.css"

export default function App() {
  const [quote, setQuote] = useState()
  const getQuote = async () => {
    const data = await fetch("https://api.kanye.rest").then(rsp => rsp.json())
    setQuote(data.quote)
  }
  const getNewQuote = () => {
    setQuote(null)
    getQuote()
  }

  useEffect(() => {
    getQuote()
  }, [])

  return (
    <div className="App">
      <h1>Hello Kanye Quotes</h1>
      {quote ? quote : "Rest"}

      <button onClick={getNewQuote}>New Quote</button>
    </div>
  )
}
