import React from "react";

import { ListLi } from "./ContactsList.styled";

export const ContactList = ({contacts}) => {
    
    return (
        <ul>
            { 
            contacts.map(({id, name, number}) => {
                return (
                    <ListLi key={id}>{name}:<p>{number}</p></ListLi>
                )
                
            })}
        </ul>
    )}
