import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { list_map, userRegistryActions } from './userRegistrySlice';

export default function UserRegistry() {
    const [new_user, setNew_user] = useState('');
    const users = useSelector(list_map);
    const dispatch = useDispatch();

    function add() {
        if (new_user.trim() !== '')
            dispatch(userRegistryActions.add(new_user));
        setNew_user('');
     }

    return (
        <div className="user">
            <h2>Registro de usuários</h2>
            <input type="text" value={new_user} onChange={(ev) => setNew_user(ev.target.value)}/>
            <button onClick={()=> add()}>Adicionar...</button>
            <ul>
                {users.map((user, index) => <li key={index} >{user}</li>)}
            </ul>
        </div>
    );
}
