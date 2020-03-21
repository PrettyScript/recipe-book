import React, { useContext } from 'react';
import { UserContext } from '../UserContext';


export default function Test2() {
    const msg = useContext(UserContext);
    
    return (
        <div>
            <h1>Test 2!</h1>
            <p>{msg}</p>
        </div>
    );
}