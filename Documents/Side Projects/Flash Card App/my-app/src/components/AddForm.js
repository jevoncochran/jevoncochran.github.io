import React, { useState } from "react";

const AddForm = props => {
    // console.log(props.stateConceptArray);
    const [newConcept, setNewConcept] = useState({ term: '', definition: '' });
    
    const handleChanges = e => {
       setNewConcept({
           ...newConcept,
           [e.target.name]: e.target.value
       });
       console.log(newConcept);
    }

    const handleSubmit = (e, obj) => {
        e.preventDefault();
        props.setStateConceptArray([
            ...props.stateConceptArray,
            obj
        ]);
        document.addForm.reset();
        console.log(props.stateConceptArray);
    }

    return (

        <form name="addForm" onSubmit={e => handleSubmit(e, newConcept)}>
            <label> New Term: <input type="text" name="term" placeholder="add new term" onChange={handleChanges} /></label>
            <br />
            <label>New Defintion: <input type="text" name="definition" placeholder="add new definition" onChange={handleChanges} /></label>
            <br />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddForm;