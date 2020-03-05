import React from "react";

const Form = props =>{
    return (
        <form onSubmit={props.weatherMethod}>
            <input type="text" name="city" placeholder="Input your city"/>
            <button>Submit</button>
        </form>
    );
}

export default Form;