import { useState } from "react"

export default function InputWithLabel({ id, label, children, type = 'text', placeholder, onSearch, search }) {
    /* const [showSearch, setShowSearch] = useState('')

    function handleChange(event) {
        if (event.target.value == '') {
            setShowSearch('')
        } else {
            setShowSearch(`Searching for: "${event.target.value}"`)
        }
        
        if(typeof onSearch === 'function') {
            onSearch(event);
        }
    } */

    function handleBlur() {
        console.log('Wait, come back!')
    }

    return (
        <>
            <label htmlFor={id}>{children}</label>
            <input id={id} type={type} placeholder={placeholder} onChange={() => onSearch(event)} onBlur={handleBlur} value={search} />
        </>
    )
}