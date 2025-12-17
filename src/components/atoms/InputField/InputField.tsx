const InputField = () => {
    return (
        <>
            <label htmlFor="name">Name (4 to 8 characters):</label>

            <input type="text" id="name" name="name" required />
        </>
    )
}

export default InputField;