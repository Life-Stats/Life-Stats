import React, { useState } from 'react'
import { getUser } from '../../services/users'
import { useMain } from '../../context/MainContext';

export default function PrintStats() {
    const currentUser = getUser();
    // console.log('PROPS!', props)
    const { name, setName } = useMain();
    console.log('USERS Name in PRINT STATS', name);
    
    return (
        <div>
            <h1>{currentUser.email}</h1>
            <h2>{name}</h2>
        </div>
    )
}
