import { useState, useEffect } from "react";

const FormExercise = () => {

    const [inputValue, setInputValue] = useState("");
    const [displayValue, setDisplayValue] = useState();
    const [inputList, setInputList] = useState([]);

    const handleChange = (e) => {
        e.preventDefault()
        return setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log();
        // return setDisplayValue(inputValue)
        setDisplayValue(inputValue);

        // const newArray = [...inputList];
        // newArray.push(inputValue);
        // console.log(newArray);

        // setInputList(newArray)

        // Shorthand Solution 
        setInputList((prevState) => {
            return [...prevState, inputValue]
        })

        return;
    }

    useEffect(() => {
        console.log(`Input list: ${inputList}`)
    },[inputList])

    return (
        <div>
            <h1>Form Exercise</h1>
            <form onSubmit={handleSubmit}>
                <input value={inputValue} onChange={handleChange}/>
                <input type="submit" />
                <br />
            </form>
            {/* <p>{displayValue}</p> */}
            {inputList.map((e, i) => {
                return (
                    <h3 key={i}> {i + 1}. {e}</h3>
                )
            })}
        </div>
    )
}

export default FormExercise;