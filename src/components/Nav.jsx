import React from 'react';
import AddBar from './AddBar.jsx';


function Nav({AddTodo}){

    return(
        <div>
            <AddBar AddTodo = {AddTodo}/>
        </div>
    );
};

export default Nav;