import { useState } from "react"

export default function InputWithLabel({ id, label, children, type = 'text', placeholder, onSearch, search }) {
    const [showSearch, setShowSearch] = useState('')

function handleChange(event) {
    if (event.target.value == '') {
        setShowSearch('')
    } else {
        setShowSearch(`Searching for: "${event.target.value}"`)
    }
    onSearch(event);
}

function handleBlur() {
    console.log('Wait, come back!')
}

return (
    <>
        <label htmlFor={id}>{children}</label>
        <input type={type} id={id} placeholder={placeholder} onChange={handleChange} onBlur={handleBlur} value={search} />
        <p>{showSearch}</p>
    </>
)
  }