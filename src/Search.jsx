import { useState } from "react"

export default function Search({id, placeholder, onSearch}) {
    const [searchTerm, setSearchTerm] = useState('')

    function handleChange(event) {
        if (event.target.value == '') {
            setSearchTerm('')
        } else {
            setSearchTerm(`Searching for: "${event.target.value}"`)
            onSearch(event);
        }
    }

    function handleBlur() {
        console.log('Wait, come back!')
    }

    return (
      <div>
        <label htmlFor={id}>Search: </label>
        <input type="text" id={id} placeholder={placeholder} onChange={handleChange} onBlur={handleBlur} />
        <p>{searchTerm}</p>
      </div>
    )
  }