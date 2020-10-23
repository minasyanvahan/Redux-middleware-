import React from 'react';
import UserDataType from './Action';

const data = { UsersData: ''};
const Reducer = (state = data,action) => {

    switch(action.type) {
        case UserDataType :
            return state
        default :
            return state
    }
    return (
        <div>
            <h1>React Redux</h1>
        </div>
    )
}

export default Reducer;