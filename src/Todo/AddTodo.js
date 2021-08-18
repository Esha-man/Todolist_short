import React, {useState} from "react";
import PropTypes from "prop-types"

const styles = {
    form: {
        padding: "5px 5px 5px 0px",
        margin: "5px 5px 5px 0px",
    },
    button: {
        margin: "0px 0px 0px 5px",
        padding: "0px 0px 0px 5px",
    },
}



function AddTodo({onCreate}) {
    const [value, setValue] = React.useState("");

    function submitHandler(event) {
        event.preventDefault()
        if (value.trim()) {
            onCreate(value)
            setValue("")
        }
    }

    return (
        <form style={styles.form} onSubmit={submitHandler}>
            <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
            <button style={styles.button} type="submit">Добавить</button>
        </form>
    );
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo;