import React from React;


export function Input(props) {

    <input value={props.search} type="text" placeholder="Book title" onChange={props.handleInputChange}>
    </input>

}

export function Button(props) {
    <button type="submit" onClick={props.handleSubmitForm}>Search</button>
}