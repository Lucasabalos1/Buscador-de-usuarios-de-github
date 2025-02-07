import { useState } from "react"
import '../styles/SearchUser.css';

export const SearchUser = ({updateUser}) => {
    
    const [inputValue, setInputValue] = useState('')

    const updateInputValue = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        updateUser(inputValue)
    }

    return (
      <>
        <form className="input-user-cont" onSubmit={onSubmit}>
            <input onChange={updateInputValue} type="text" placeholder="Ingrese un usuario a buscar" />
            <button className="searchUser">Buscar usuario</button>
        </form>
      </>
    )
  }
  
