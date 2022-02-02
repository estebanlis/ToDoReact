import React, { useState } from 'react';



function AddBar({AddTodo}){

    const [description,setDescription] = useState('');

    return(
        <div id='inputContainer'>
        <form onSubmit={ (e) => {
            e.preventDefault();
            AddTodo(description);
            setDescription('');
        }}>
        
            <input 
                type="text" 
                id="toDoInput" 
                placeholder="Descripción To-Do..."
                value={description}
                onChange={e => setDescription(e.target.value)}
            />     
            <input id="addButton" type="submit" value="Agregar" /> 
            
       
        </form>
         </div>
    );
};

export default AddBar;