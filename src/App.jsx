import { useState } from "react"
import { Card } from "./Components/card"
import { SearchUser } from "./Components/searchUser"
import './app.css'
export const App = () => {

  const [inputValue, setInputValue] = useState('')

  const updateInputValue = (value) => {
    setInputValue(value)
  }

  return (
    <>
      <h1>Buscador de usuarios de github</h1>
      <SearchUser updateUser = {updateInputValue}></SearchUser>
      <Card user = {inputValue}></Card>      
    </>
  )
}
