import React from 'react';

export const UserContext = React.createContext({name: 'Alberto', surname: 'Martínez'})
export const UserProvider = UserContext.Provider