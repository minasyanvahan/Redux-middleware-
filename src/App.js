import React, { useEffect } from 'react';
import './App.scss';
import Action from './Redux/Action';

function App() {
    const CreateUsersList = async (dispatch) => {
        fetch('https://api.github.com/users')
            .then((resp) => resp.json())
            .then((users) => dispatch(Action(users)))
            .catch(console.log);
    }
    useEffect(() => {
        CreateUsersList()
    });
    return (
        <div>

        </div>
    )
}

export default App;
