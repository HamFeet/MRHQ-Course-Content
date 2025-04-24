import { useEffect, useState } from "react";
const Form = () => {

    const [inputValue, setInputValue] = useState("")

    const handleSumbit = (e) => {
        e.preventDefault()
        console.log("Form submitted!");
        // console.log(e.target[0].value);
    }

    const handleChange = (e) => {
        // console.log(e.target.value);
        return setInputValue(e.target.value)
    }

    useEffect(() => {
        console.log(`The user input: ${inputValue}`)
    },[inputValue])

    return (
        <div>
            <form onSubmit={handleSumbit}>
                <label>Name: </label>
                <input value={inputValue} onChange={handleChange} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form;